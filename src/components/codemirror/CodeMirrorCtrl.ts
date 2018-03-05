/// <reference path="../../../typings/modules/codemirror/index.d.ts" />
import * as CodeMirror from 'codemirror';

export class CodeMirrorCtrl {
    codeMirrorObj: any;

    constructor() {
        this.codeMirrorObj = CodeMirror.fromTextArea(<HTMLTextAreaElement>document.getElementById("query-json-result"), {
            lineNumbers: true,
            mode:  {
                name: "javascript",
                json: true
            },
            readOnly: true
        });
    }

}
