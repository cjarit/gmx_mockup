$(document).ready(function () {
  //Enable Table with option
  $('.gmx-data-table .data-table').DataTable({
    "paging": true,
    "scrollY": true,
    "scrollX": true,
    searching: false,
    "dom": '<"table-header"lf>rt<"table-footer"pi><"clear-fix">',
    fixedColumns: {
      leftColumns: 1
    },
    "order": [],
    "columnDefs": [{
      "targets": 'no-sort',
      "orderable": false,
    }],
    language: {
      paginate: {
        next: '<i class="fas fa-angle-right"></i>',
        previous: '<i class="fas fa-angle-left"></i>',
        first: '<i class="fas fa-angle-double-left"></i> First',
        last: 'Last <i class="fas fa-angle-double-right"></i>'  
      }
    },
    "pagingType": "full_numbers"
  });
  //Refresh table again after loading to fix column width bugs
  setTimeout(
    function () {
      $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
    },
    200);
});