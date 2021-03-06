/*
 * File: app/view/Movie1.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.6.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.6.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Vidly.view.Movie1', {
    extend: 'Ext.window.Window',
    alias: 'widget.vmMovie1',

    requires: [
        'Ext.form.Panel',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.toolbar.Paging'
    ],
    
    height: 370,
    width: 408,
    layout: 'fit',
    title: 'Movies',

    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            itemId: 'frmMovie',
            title: '',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    ui: 'i21-toolbar',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'btnNew',
                            ui: 'i21-button-toolbar-small',
                            text: 'New'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnSave',
                            ui: 'i21-button-toolbar-small',
                            text: 'Save'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnSearch',
                            ui: 'i21-button-toolbar-small',
                            text: 'Search'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnDelete',
                            ui: 'i21-button-toolbar-small',
                            text: 'Delete'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnUndo',
                            ui: 'i21-button-toolbar-small',
                            text: 'Undo'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnClose',
                            ui: 'i21-button-toolbar-small',
                            text: 'Close'
                        }
                    ]
                },
                // {
                //     xtype: 'ipagingstatusbar',
                //     flex: 1,
                //     dock: 'bottom'
                // }
            ],
            items: [
                {
                    xtype: 'tabpanel',
                    itemId: 'tabMovie',
                    flex: 1,
                    bodyCls: 'i21-tab',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            title: 'Details',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    margin: '0 5 5 0',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            itemId: 'txtMovieName',
                                            fieldLabel: 'Movie Name:',
                                            labelWidth: 130
                                        },
                                        {
                                            xtype: 'gridcombobox',
                                            columns: [
                                                {
                                                    dataIndex: 'intGenreId',
                                                    dataType: 'numeric',
                                                    text: 'Genre Id',
                                                    flex: 1
                                                },
                                                {
                                                    dataIndex: 'strGenreName',
                                                    dataType: 'string',
                                                    text: 'Genre Name',
                                                    flex: 1
                                                }
                                            ],
                                            flex: 1,
                                            itemId: 'cboGenre',
                                            fieldLabel: 'Genre: ',
                                            labelWidth: 130,
                                            displayField: 'strGenreName',
                                            valueField: 'strGenreName'
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            itemId: 'txtGenreId',
                                            fieldLabel: 'Genre Id:',
                                            labelWidth: 130
                                        },
                                        {
                                            xtype: 'datefield',
                                            flex: 1,
                                            itemId: 'dtmReleaseDate',
                                            fieldLabel: 'Release Date: ',
                                            labelWidth: 130
                                        },
                                        {
                                            xtype: 'datefield',
                                            flex: 1,
                                            itemId: 'dtmDateAdded',
                                            fieldLabel: 'Date Added: ',
                                            labelWidth: 130
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            itemId: 'txtNumberInStock',
                                            fieldLabel: 'Number in Stock:',
                                            labelWidth: 130
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            itemId: 'txtNumberAvailable',
                                            fieldLabel: 'Number Available:',
                                            labelWidth: 130
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            itemId: 'pnlAuditLog',
                            layout: 'fit',
                            title: 'Audit Log',
                            items: [
                                {
                                    xtype: 'auditlogtree'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

});