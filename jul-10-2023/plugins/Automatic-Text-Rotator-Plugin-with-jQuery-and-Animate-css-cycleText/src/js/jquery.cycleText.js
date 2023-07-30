/**
 * Created by Sky on 2015/12/23.
 */
;
+function ($, window, document) {

    var PLUGIN_NAME = 'cycleText',
        VERSION = '1.0.0',
        DEFAULTS = {
            separator: '|',
            animation: 'flipInX',
            interval: 2000
        };

    function Plugin(element, options) {
        this.$element = $(element);
        this.options = options;
        this._init();
    }

    Plugin.prototype = {
        _init: function () {
            var that = this;
            this.originalText = this.$element.text();
            this.textArray = this.originalText.split(this.options.separator);
            this.$element.empty();
            $.each(this.textArray, function () {
                that.$element.append('<span class="cycleText animated ' + that.options.animation + '" style="display: none;">' + this + '</span>');
            });
            this.resume();
        },

        resume: function () {
            if(!this._interval){
                var that = this;
                var index = 0;
                this.$element.find('span.cycleText').hide();
                this.$element.find('span.cycleText:eq(0)').css('display', 'inline-block');
                this._interval = setInterval(function () {
                    index++;
                    index = index % that.textArray.length;
                    that.$element.find('span.cycleText').hide();
                    that.$element.find('span.cycleText:eq(' + index + ')').css('display', 'inline-block');
                }, this.options.interval);
            }
        },

        pause: function () {
            if(this._interval){
                this._interval = clearInterval(this._interval);
            }
        }
    }

    function fn(option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('plugin_' + PLUGIN_NAME);
            var options = $.extend({}, DEFAULTS, $this.data(), typeof option == 'object' && option)

            if (!data) $this.data('plugin_' + PLUGIN_NAME, (data = new Plugin(this, options)))
            if (typeof option == 'string') data[option]();
        });
    }

    $.fn[PLUGIN_NAME] = fn;
    $.fn[PLUGIN_NAME].Constructor = Plugin;

}(jQuery, window, document);
