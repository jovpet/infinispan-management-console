import {App} from "../../ManagementConsole";
import {QueryResultsTableCtrl} from "./QueryResultsTableCtrl";

export class QueryResultsTable {

    bindings: any;
    controller: any;
    templateUrl: string;

    constructor() {
        this.bindings = {
          tableData: "="
        };
        this.controller = QueryResultsTableCtrl;
        this.templateUrl = "components/query-results-table/query-results-table.html";
    }
}

const module: ng.IModule = App.module("managementConsole.components.query-results-table", []);
module.component("queryResultsTable", new QueryResultsTable());
