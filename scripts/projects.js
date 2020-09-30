let projs = [
  {
    id: 0,
    name: "excelsia",
  },
  {
    id: 1,
    name: "ubc",
  },
  {
    id: 2,
    name: "idc",
  },
];

let projsCode = `<div class="col">
<div class="proj excelsia"></div>
</div>`;

console.log(projsCode);

$(".gal-render").html(projsCode);
