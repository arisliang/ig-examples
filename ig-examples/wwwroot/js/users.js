$(function () {
    $.getJSON('/api/User/Users', function (response) {
        console.log('**' + JSON.stringify(response));
        this.users = response;
        console.log('**' + this.users);

        for (var i = 0; i < this.users.length; i++) {
            this.users[i].ImageUrl = "https://lorempixel.com/50/50/food/" + (i % 10) + "/";
        }
        $("#grid").igGrid({
            primaryKey: "id",
            caption: "<span> <img src=\"//www.infragistics.com/media/441501/horz_logo.png\" alt=\"Infragistics\"></span>",
            width: '100%',
            columns: [
                { headerText: "ID", key: "id", dataType: "number", width: "15%", hidden: false },
                { headerText: "User Name", key: "username", dataType: "string", width: "85%" },
            ],
            autofitLastColumn: false,
            autoGenerateColumns: false,
            dataSource: this.users,
            //responseDataKey: "results",
            autoCommit: true,
            features: [
                {
                    name: "Sorting",
                    sortingDialogContainment: "window"
                },
                {
                    name: "Filtering",
                    type: "local",
                    columnSettings: [
                        {
                            columnKey: "ImageUrl",
                            allowFiltering: false
                        },
                        {
                            columnKey: "InStock",
                            condition: "greaterThan"
                        }
                    ]
                },
                {
                    name: "GroupBy",
                    columnSettings: [
                        {
                            columnKey: "CategoryName",
                            isGroupBy: true
                        }
                    ]
                },
                {
                    name: "Selection"
                },
                {
                    name: "Paging",
                    pageSize: 10
                },
                {
                    name: "Resizing"
                },
                {
                    name: "Updating",
                    editMode: "dialog",
                    enableAddRow: false,
                    columnSettings: [
                        {
                            columnKey: "ImageUrl",
                            readOnly: false
                        }
                    ]
                }
            ]
        });
    });
})