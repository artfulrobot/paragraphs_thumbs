;;

Drupal.behaviors.pp_thumbs = {
  attach: function attach(context, settings) {

    jQuery('.paragraphs-add-more-submit', context).not('.pp-thumbs-processed').each(function () {
      var bundle_name = this.value.replace(/^Add /, '');
      if (bundle_name in settings.pp_thumbs) {
        var orig_btn = this;

        var btn = jQuery('<img/>').attr('src', settings.pp_thumbs[bundle_name]).attr('alt', 'Add ' + bundle_name).addClass('pp-thumbs-img-btn');
        var ctr = jQuery('<div/>').addClass('pp-thumbs-img-wrapper').on('click', function () {
          jQuery(orig_btn).trigger('mousedown');
        });
        ctr.append(jQuery('<div/>').addClass('pp-thumbs-thumb').append(btn)).append(jQuery('<div/>').text('Add ' + bundle_name).addClass('pp-thumbs-name'));

        jQuery(orig_btn).addClass('pp-thumbs-processed').hide().after(ctr);
      }
    });
  }
};
//# sourceMappingURL=pp-thumbs.js.map
