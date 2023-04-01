$(document).ready(function () {
    $.getJSON('/static/treeview-data.json', function (data) {
        let categories = data.categories;
        let $treeview = $('#treeview');
        createTreeStructure($treeview, categories);
        $treeview.treeview();
    });
});

function createTreeStructure($element, items) {
    let $ul = $('<ul></ul>');
    items.forEach(function (item) {
        let $li = $('<li></li>').text(item.label);
        if (item.items) {
            createTreeStructure($li, item.items);
        }
        $ul.append($li);
    });
    $element.append($ul);
}
