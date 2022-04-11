sap.ui.define(
    ["./BaseController","sap/ui/model/json/JSONModel"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("fiorital.com.testUiTable.controller.MainView", {
            onInit: function () {},

            onAfterRendering: function(){
               this.getView().setModel(this.initSampleDataModel3(), "DATATESTSTD");
               this.getView().setModel(this.initSampleDataModel(), "DATATEST");
               this.getView().setModel(this.initSampleDataModel2(), "COLUMNS");
            },

            //----------------------------------------

            columnFactory: function(sID,Context){

                //--> col IDX by model
                var colidx = Context.getProperty(Context.getPath()).idxcol;

                var el = new sap.m.Text({
                    text:"{DATATEST>idx}"
                });

                return new sap.ui.table.Column({
                    id: 'id' + Context.getProperty(Context.getPath()).idxcol,
                    label: 'COL '+Context.getProperty(Context.getPath()).idxcol.toString(),
                    template: el,
                    resizable: false,
                    width: '10em'
                });
            },

            //----------------------------------------
            initSampleDataModel3: function() {
                var oModel = new JSONModel();

                var dt = [];
                for (var idx=1;idx<60;idx++){
                    dt.push({val1: idx, val2: idx});
                }
                oModel.setData(dt);

                return oModel;
            },


            initSampleDataModel: function() {
                var oModel = new JSONModel();

                var dt = [];
                for (var idx=1;idx<60;idx++){

                    var arr = [];
                    for (var idy=1;idy<20;idy++){
                        if (idx === 3 && idy === 2){
                            arr.push({val1: idy , val2: idy+idx, backColor: 'red'}); 
                        }else{
                            arr.push({val1: idy , val2: idy+idx}); 
                        }
                    }

                    dt.push(arr);
                }
                oModel.setData(dt);

                return oModel;
            },

            cellformatter: function(scell){
                debugger;
            },

            initSampleDataModel2: function() {
                var oModel = new JSONModel();

                var dt = [];
                for (var idx=1;idx<20;idx++){
                    dt.push({idxcol: idx});
                }
                oModel.setData(dt);

                return oModel;
            },

            formatter1: function(txt){
                return 'hello'+txt;
            }


        });
    }
);
