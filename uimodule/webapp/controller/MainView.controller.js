/* eslint-disable no-debugger */
sap.ui.define(
  ["./BaseController", "sap/ui/model/json/JSONModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("fiorital.com.testUiTable.controller.MainView", {
      onInit: function () {},

      onAfterRendering: function () {
        this.getView().setModel(this.initSampleDataModel3(), "DATATESTSTD");
        this.getView().setModel(this.initSampleDataModel(), "DATATEST");
        this.getView().setModel(this.initSampleDataModel2(), "COLUMNS");

        this.byId("table3").addFilterRange({
          id: "test",
          matchType: "fuzzy",
          filterColumns: [{ colidx: 2, attribute: "odd"}],
          filterValue: 1
        });
      },

      //----------------------------------------

      columnFactory: function (sID, Context) {

        //--> col IDX by model

        var el = new sap.m.Text({
          text: "{DATATEST>idx}"
        });

        return new sap.ui.table.Column({
          id: "id" + Context.getProperty(Context.getPath()).idxcol,
          label: "COL " + Context.getProperty(Context.getPath()).idxcol.toString(),
          template: el,
          resizable: false,
          width: "10em"
        });
      },

      //----------------------------------------
      initSampleDataModel3: function () {
        var oModel = new JSONModel();

        var dt = [];
        for (var idx = 1; idx < 60; idx++) {
          dt.push({
            val1: idx,
            val2: idx
          });
        }
        oModel.setData(dt);

        return oModel;
      },

      //--------------->
      isOdd: function (num) {
        return num % 2;
      },

      _makeid: function (length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    },

      initSampleDataModel: function () {
        var oModel = new JSONModel();

        var dt = [];
        for (var idx = 1; idx < 60; idx++) {

          var arr = [];
          for (var idy = 1; idy < 20; idy++) {
            if (idx === 9 && idy === 2) {
              arr.push({
                Name: idx,
                odd: this.isOdd(idx),
                guid: this._makeid(5),
                val1: idy,
                val2: idy + idx,
                backColor: "red",
                icon: [{
                    src: "sap-icon://action-settings"
                  },
                  {
                    src: "sap-icon://action-settings",
                    color: "red"
                  }
                ]
              });
            } else {
              arr.push({
                Name: idx,
                odd: this.isOdd(idx),
                guid: this._makeid(5),
                val1: idy,
                val2: idy + idx,
                band: "green"
              });
            }
          }

          dt.push(arr);
        }
        oModel.setData(dt);

        return oModel;
      },
      //--------------->

      cellformatter: function (_scell) {
        debugger;
      },

      initSampleDataModel2: function () {
        var oModel = new JSONModel();

        var dt = [];
        for (var idx = 1; idx < 20; idx++) {
          dt.push({
            idxcol: idx
          });
        }
        oModel.setData(dt);

        return oModel;
      },

      formatter1: function (txt) {
        return "hello" + txt;
      }


    });
  }
);