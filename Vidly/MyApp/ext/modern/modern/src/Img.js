/**
 * This is a simple way to add an image of any size to your application and have it participate in
 * the layout system like any other component. This component typically takes between 1 and 3
 * configurations - a {@link #src}, and optionally a {@link #height} and a {@link #width}:
 * 
 * ```javascript
 * @example({ framework: 'extjs' })
 * var img = Ext.create('Ext.Img', {
 *     src: 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png',
 *     height: 64,
 *     width: 64
 * });
 * Ext.Viewport.add(img);
 * ```
 *
 * It's also easy to add an image into a panel or other container using its xtype:
 * ```javascript
 * @example({ framework: 'extjs' })
 * Ext.create('Ext.Panel', {
 *     fullscreen: true,
 *     layout: 'hbox',
 *     items: [
 *         {
 *             xtype: 'image',
 *             src: 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png',
 *             flex: 1
 *         },
 *         {
 *             xtype: 'panel',
 *             flex: 2,
 *             html: 'Sencha Inc.<br/>1700 Seaport Boulevard Suite 120, Redwood City, CA'
 *         }
 *     ]
 * });
 * ```
 * ```html
 * @example({framework: 'ext-web-components', packages:['ext-web-components'], tab: 1 })
 * <ext-panel shadow="true" layout="fit">
 *     <ext-image
 *         width="64"
 *         height="64"
 *         src="http://www.sencha.com/assets/images/sencha-avatar-64x64.png"
 *     >
 *     </ext-image>
 * </ext-panel>
 * ```
 * ```javascript
 * @example({framework: 'ext-web-components', tab: 2, packages: ['ext-web-components']})
 * import '@sencha/ext-web-components/dist/ext-panel.component';
 * import '@sencha/ext-web-components/dist/ext-image.component';
 * 
 * export default class ImageFieldComponent {}
 * ```
 * ```javascript
 * @example({framework: 'ext-react', packages:['ext-react']})
 * import React, { Component } from 'react'
 * import { ExtPanel, ExtImage } from '@sencha/ext-react';
 *
 * export default class MyExample extends Component {
 *     render() {
 *         return (
 *             <ExtPanel shadow layout="fit">
 *                 <ExtImage
 *                     height="64"
 *                     width="64"
 *                     src="http://www.sencha.com/assets/images/sencha-avatar-64x64.png"
 *                 />
 *             </ExtPanel>
 *         );
 *     }
 * }
 * ```
 * ```javascript
 * @example({framework: 'ext-angular', packages:['ext-angular']})
 *  import { Component } from '@angular/core'
 *  declare var Ext: any;
 *
 *  @Component({
 *      selector: 'app-root-1',
 *      styles: [`
 *              `],
 *      template: `
 *              <ExtPanel shadow="true" layout="fit">
 *                  <ExtImage
 *                      height="64"
 *                      width="64"
 *                      src="http://www.sencha.com/assets/images/sencha-avatar-64x64.png"
 *                  ></ExtImage>
 *              </ExtPanel>
 *              `
 *  })
 *  export class AppComponent {
 *
 *  }
 * ```
 *
 * Here we created a panel which contains an image (a profile picture in this case) and a text area
 * to allow the user to enter profile information about themselves. In this case we used an
 * {@link Ext.layout.HBox hbox layout} and flexed the image to take up one third of the width and
 * the text area to take two thirds of the width. See the {@link Ext.layout.HBox hbox docs} for
 * more information on flexing items.
 */
Ext.define('Ext.Img', {
    extend: 'Ext.Component',
    xtype: ['image', 'img'],
    alternateClassName: 'Ext.Image',

    /**
     * @event tap
     * Fires whenever the component is tapped
     * @param {Ext.Img} this The Image instance
     * @param {Ext.event.Event} e The event object
     */

    /**
     * @event load
     * Fires when the image is loaded
     * @param {Ext.Img} this The Image instance
     * @param {Ext.event.Event} e The event object
     */

    /**
     * @event error
     * Fires if an error occured when trying to load the image
     * @param {Ext.Img} this The Image instance
     * @param {Ext.event.Event} e The event object
     */

    config: {
        /**
         * @cfg {String} src The source of this image. See {@link Ext#resolveResource} for
         * details on locating application resources.
         * @accessor
         */
        src: null,

        /**
         * @cfg {String} imageCls The CSS class to be used when {@link #mode} is not set to
         * 'background'
         * @accessor
         */
        imageCls: Ext.baseCSSPrefix + 'img-image',

        /**
         * @cfg {String} backgroundCls The CSS class to be used when {@link #mode} is set to
         * 'background'
         * @accessor
         */
        backgroundCls: Ext.baseCSSPrefix + 'img-background',

        /**
         * @cfg {String} mode If set to 'background', uses a background-image CSS property instead
         * of an `<img>` tag to display the image.
         */
        mode: 'background'
    },

    baseCls: Ext.baseCSSPrefix + 'img',

    beforeInitialize: function() {
        var me = this;

        me.onLoad = me.onLoad.bind(me);
        me.onError = me.onError.bind(me);
    },

    initialize: function() {
        var me = this;

        me.callParent();

        me.relayEvents(me.renderElement, '*');

        me.element.on({
            tap: 'onTap',
            scope: me
        });
    },

    hide: function() {
        var me = this;

        me.callParent(arguments);
        me.hiddenSrc = me.hiddenSrc || me.getSrc();

        if (!me.isDestroying) {
            me.setSrc(null);
        }
    },

    afterShow: function() {
        this.callParent();

        if (this.hiddenSrc) {
            this.setSrc(this.hiddenSrc);
            delete this.hiddenSrc;
        }
    },

    updateMode: function(mode) {
        var me = this,
            imageCls = me.getImageCls(),
            backgroundCls = me.getBackgroundCls();

        if (mode === 'background') {
            if (me.imageElement) {
                me.imageElement.destroy();
                delete me.imageElement;
                me.updateSrc(me.getSrc());
            }

            me.replaceCls(imageCls, backgroundCls);
        }
        else {
            me.imageElement = me.element.createChild({ tag: 'img' });

            me.replaceCls(backgroundCls, imageCls);
        }
    },

    updateImageCls: function(newCls, oldCls) {
        this.replaceCls(oldCls, newCls);
    },

    updateBackgroundCls: function(newCls, oldCls) {
        this.replaceCls(oldCls, newCls);
    },

    onTap: function(e) {
        this.fireEvent('tap', this, e);
    },

    applySrc: function(src) {
        return src && Ext.resolveResource(src);
    },

    /**
     * @private
     */
    updateSrc: function(newSrc) {
        var me = this,
            dom;

        if (me.getMode() === 'background') {
            dom = this.imageObject || new Image();
        }
        else {
            dom = me.imageElement.dom;
        }

        this.imageObject = dom;

        dom.setAttribute('src', Ext.isString(newSrc) ? newSrc : '');
        dom.addEventListener('load', me.onLoad, false);
        dom.addEventListener('error', me.onError, false);
    },

    detachListeners: function() {
        var dom = this.imageObject;

        if (dom) {
            dom.removeEventListener('load', this.onLoad, false);
            dom.removeEventListener('error', this.onError, false);
        }
    },

    onLoad: function(e) {
        this.detachListeners();

        if (this.getMode() === 'background') {
            this.element.dom.style.backgroundImage = 'url("' + this.imageObject.src + '")';
        }

        this.fireEvent('load', this, e);
    },

    onError: function(e) {
        this.detachListeners();

        // Attempt to set the src even though the error event fired.
        if (this.getMode() === 'background') {
            this.element.dom.style.backgroundImage = 'url("' + this.imageObject.src + '")';
        }

        this.fireEvent('error', this, e);
    },

    updateWidth: function(width) {
        var sizingElement = (this.getMode() === 'background') ? this.element : this.imageElement;

        sizingElement.setWidth(width);

        this.callParent(arguments);
    },

    updateHeight: function(height) {
        var sizingElement = (this.getMode() === 'background') ? this.element : this.imageElement;

        sizingElement.setHeight(height);

        this.callParent(arguments);
    },

    doDestroy: function() {
        var me = this;

        me.detachListeners();

        me.imageObject = me.imageElement = Ext.destroy(me.imageObject, me.imageElement);

        me.callParent();
    }
});