(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\משה\Documents\todo\todo\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FlD/":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-item/todo-item.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TodoItemComponent {
    constructor() {
        this.deleteThisItem$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](null);
    }
    deleteItem(itemId) {
        this.deleteThisItem$.emit(itemId);
    }
    toggleDone() {
        this.itemToDisplay.done = !this.itemToDisplay.done;
    }
}
TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) { return new (t || TodoItemComponent)(); };
TodoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoItemComponent, selectors: [["todo-item"]], inputs: { itemToDisplay: "itemToDisplay" }, outputs: { deleteThisItem$: "deleteThisItem$" }, decls: 7, vars: 6, consts: [[1, "list-item"], ["type", "checkbox", 3, "id", "checked", "change"], [3, "for"], [3, "click"]], template: function TodoItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TodoItemComponent_Template_input_change_2_listener() { return ctx.toggleDone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_button_click_5_listener() { return ctx.deleteItem(ctx.itemToDisplay.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("completed", ctx.itemToDisplay.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.itemToDisplay.id)("checked", ctx.itemToDisplay.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.itemToDisplay.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.itemToDisplay.title);
    } }, styles: ["@charset \"UTF-8\";\n.list-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n.list-item.completed[_ngcontent-%COMP%] {\n  background: #6c757d;\n  opacity: 0.6;\n}\n.list-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before {\n  margin: 0 10px 0 0;\n}\n.list-item[_ngcontent-%COMP%]   [type=checkbox][_ngcontent-%COMP%]:not(:checked), .list-item[_ngcontent-%COMP%]   [type=checkbox][_ngcontent-%COMP%]:checked {\n  position: absolute;\n  left: 0;\n  opacity: 0.01;\n}\n.list-item[_ngcontent-%COMP%]   [type=checkbox][_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%], .list-item[_ngcontent-%COMP%]   [type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 2.3em;\n  font-size: 1.05em;\n  line-height: 1.7;\n  cursor: pointer;\n}\n.list-item[_ngcontent-%COMP%]   [type=checkbox][_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%]:after, .list-item[_ngcontent-%COMP%]   [type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  content: \"\u2715\";\n  position: absolute;\n  top: 0.525em;\n  left: 0.18em;\n  font-size: 1.375em;\n  color: #000;\n  line-height: 0;\n  transition: all 0.2s;\n}\n.list-item[_ngcontent-%COMP%]   [type=checkbox][_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%]:after {\n  opacity: 0;\n  transform: scale(0) rotate(45deg);\n}\n.list-item[_ngcontent-%COMP%]   [type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  opacity: 1;\n  transform: scale(1) rotate(0);\n}\n.list-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 4px;\n  background: #6c757d;\n  color: #fff;\n  width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.list-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #25282b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0b2RvLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQUVGO0FBQUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFFSjtBQUNJO0VBQ0Usa0JBQUE7QUFDTjtBQUVFOztFQUVFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7QUFBSjtBQUVFOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBRUU7O0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBRUksb0JBQUE7QUFBUjtBQUVFO0VBQ0UsVUFBQTtFQUVJLGlDQUFBO0FBQVI7QUFHRTtFQUNFLFVBQUE7RUFFSSw2QkFBQTtBQURSO0FBS0U7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBSEo7QUFLSTtFQUNFLG1CQUFBO0FBSE4iLCJmaWxlIjoidG9kby1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmxpc3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5saXN0LWl0ZW0uY29tcGxldGVkIHtcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcbiAgb3BhY2l0eTogMC42O1xufVxuLmxpc3QtaXRlbSBsYWJlbDo6YmVmb3JlIHtcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xufVxuLmxpc3QtaXRlbSBbdHlwZT1jaGVja2JveF06bm90KDpjaGVja2VkKSxcbi5saXN0LWl0ZW0gW3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDAuMDE7XG59XG4ubGlzdC1pdGVtIFt0eXBlPWNoZWNrYm94XTpub3QoOmNoZWNrZWQpICsgbGFiZWwsXG4ubGlzdC1pdGVtIFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMi4zZW07XG4gIGZvbnQtc2l6ZTogMS4wNWVtO1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGlzdC1pdGVtIFt0eXBlPWNoZWNrYm94XTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIsXG4ubGlzdC1pdGVtIFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKclVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC41MjVlbTtcbiAgbGVmdDogMC4xOGVtO1xuICBmb250LXNpemU6IDEuMzc1ZW07XG4gIGNvbG9yOiAjMDAwO1xuICBsaW5lLWhlaWdodDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4ubGlzdC1pdGVtIFt0eXBlPWNoZWNrYm94XTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNDVkZWcpO1xufVxuLmxpc3QtaXRlbSBbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMCk7XG59XG4ubGlzdC1pdGVtIGJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGlzdC1pdGVtIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyNTI4MmI7XG59Il19 */"] });


/***/ }),

/***/ "IRHt":
/*!***********************************************************!*\
  !*** ./src/app/components/add-item/add-item.component.ts ***!
  \***********************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class AddItemComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.taskTitle$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](null);
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            task: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
        });
    }
    addTask() {
        if (this.form.valid) {
            this.taskTitle$.emit(this.form.value.task);
        }
        else {
            alert('No Task Added');
        }
    }
}
AddItemComponent.ɵfac = function AddItemComponent_Factory(t) { return new (t || AddItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AddItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddItemComponent, selectors: [["add-item"]], outputs: { taskTitle$: "taskTitle$" }, decls: 4, vars: 1, consts: [[3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "task", "required", "required"], ["type", "submit"]], template: function AddItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddItemComponent_Template_form_ngSubmit_0_listener() { return ctx.addTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["form[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  display: flex;\n  justify-content: space-between;\n  font-family: \"Oswald\", sans-serif;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #6c757d;\n  padding: 10px;\n  border-radius: 8px;\n  border: 1px solid #eee;\n  width: 100%;\n  font-size: 20px;\n  font-weight: bold;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: 1px solid #eee;\n  padding: 10px;\n  border-radius: 8px;\n  margin: 0 0 0 10px;\n  cursor: pointer;\n  text-transform: uppercase;\n  color: #ef476f;\n  font-size: 20px;\n  font-family: \"Oswald\", sans-serif;\n  font-weight: bold;\n  outline: none;\n  white-space: nowrap;\n  transition: background-color 1s linear;\n  transition: color 1s ease-in-out;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #ef476f;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKO0FBR0U7RUFDRSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdDQUFBO0FBREo7QUFFSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQUFOIiwiZmlsZSI6ImFkZC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZiA7XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGNvbG9yOiM2Yzc1N2QgO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICNlZjQ3NmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWYgO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDc2ZjtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "RPnm":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo-item/todo-item.component */ "FlD/");




function TodoListComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "todo-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteThisItem$", function TodoListComponent_li_1_Template_todo_item_deleteThisItem__1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemToDisplay", item_r1);
} }
class TodoListComponent {
    constructor() {
        this.deleteThisItem$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](null);
    }
    deleteItem($event) {
        this.deleteThisItem$.emit($event);
    }
}
TodoListComponent.ɵfac = function TodoListComponent_Factory(t) { return new (t || TodoListComponent)(); };
TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoListComponent, selectors: [["todo-list"]], inputs: { itemToDisplay: "itemToDisplay" }, outputs: { deleteThisItem$: "deleteThisItem$" }, decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "itemToDisplay", "deleteThisItem$"]], template: function TodoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoListComponent_li_1_Template, 2, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemToDisplay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_2__["TodoItemComponent"]], styles: ["ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border-radius: 8px;\n  box-shadow: 0 20px 40px -10px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  font-weight: bold;\n  font-size: 20px;\n  color: #ef476f;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQUNFLDhCQUFBO0FBQ04iLCJmaWxlIjoidG9kby1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IC0xMHB4O1xyXG5cclxuICBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI2VmNDc2ZjtcclxuXHJcbiAgICAmOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/add-item/add-item.component */ "IRHt");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "RPnm");



class AppComponent {
    constructor() {
        this.todoList = [];
        this.todoList = localStorage.getItem('items') ? [...JSON.parse(localStorage.getItem('items'))] : [];
    }
    addNewTask(event) {
        this.todoList.push({
            title: event,
            id: Math.random().toString(36).substr(2, 9),
            done: false
        });
        this.saveToLocalStorage();
    }
    deleteItem(itemId) {
        this.todoList = this.todoList.filter((item) => item.id !== itemId);
        this.saveToLocalStorage();
    }
    saveToLocalStorage() {
        localStorage.setItem('items', JSON.stringify(this.todoList));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [[3, "taskTitle$"], [3, "itemToDisplay", "deleteThisItem$"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Todo App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "add-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("taskTitle$", function AppComponent_Template_add_item_taskTitle__3_listener($event) { return ctx.addNewTask($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "todo-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteThisItem$", function AppComponent_Template_todo_list_deleteThisItem__4_listener($event) { return ctx.deleteItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemToDisplay", ctx.todoList);
    } }, directives: [_components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_1__["AddItemComponent"], _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"]], styles: ["div[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding-top: 2rem;\n}\ndiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  text-align: center;\n  color: #ef476f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFESiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZGl2IHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG5cclxuXHJcbiAgaDF7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6I2VmNDc2ZjtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-item/add-item.component */ "IRHt");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "RPnm");
/* harmony import */ var _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/todo-item/todo-item.component */ "FlD/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_2__["AddItemComponent"],
        _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"],
        _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_4__["TodoItemComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map