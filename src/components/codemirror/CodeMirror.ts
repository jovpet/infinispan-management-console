import {App} from "../../ManagementConsole";
import {CodeMirrorCtrl} from "./CodeMirrorCtrl";

export class CodeMirror {

    bindings: any;
    controller: any;
    templateUrl: string;

    constructor() {
        this.bindings = {
            codeMirrorObj: "="
        };
        this.controller = CodeMirrorCtrl;
        this.templateUrl = "components/codemirror/code-mirror.html";
    }
}

const module: ng.IModule = App.module("managementConsole.components.codemirror", []);
module.component("codeMirror", new CodeMirror());
