// Đổi sản phẩm khách hàng
const tabs= document.querySelectorAll('.tab-item');
const panes = document.querySelectorAll('.tab-pane');

tabs.forEach((tab, index) =>{
    const pane = panes[index];

    tab.onclick = function(){
        console.log(pane);
        document.querySelector('.tab-item.tab-active').classList.remove('tab-active');
        document.querySelector('.tab-pane.tab-active').classList.remove('tab-active');
        
        this.classList.add('tab-active');
        pane.classList.add('tab-active');
    }
})
// Đổi sản phẩm khách hàng mobile và tablet
const tabmts = document.querySelectorAll('.tab-item-mt');
const panemts = document.querySelectorAll('.tab-pane-mt');
tabmts.forEach((tab, index) =>{
    const pane = panemts[index];

    tab.onclick = function(){
        console.log(pane);
        document.querySelector('.tab-item-mt.tab-active-mt').classList.remove('tab-active-mt');
        document.querySelector('.tab-pane-mt.tab-active-mt').classList.remove('tab-active-mt');
        
        this.classList.add('tab-active-mt');
        pane.classList.add('tab-active-mt');
    }
})
//Phân trang saản phẩm
let thisPage = 1;
let limit = 4;
let listProducts = document.querySelectorAll('.js-products-item');


function loadItem(){
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    listProducts.forEach((item, key) => {
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    listPage();
}

loadItem();
function listPage(){
    let count = Math.ceil(listProducts.length / limit);
    document.querySelector('.list-page').innerHTML = '';
    for(i = 1; i<= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('page-active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.list-page').appendChild(newPage);
    }
}
function changePage(i){
    thisPage = i;
    loadItem();
}

//Phân trang khách hàng
let listCuss = document.querySelectorAll('.js-cus-item');


function loadItemCus(){
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    listCuss.forEach((item, key) => {
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    listPageCus();
}

loadItemCus();
function listPageCus(){
    let count = Math.ceil(listCuss.length / limit);
    document.querySelector('.list-page-cus').innerHTML = '';
    for(i = 1; i<= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('page-active');
        }
        newPage.setAttribute('onclick', "changePageCus(" + i + ")");
        document.querySelector('.list-page-cus').appendChild(newPage);
    }
}
function changePageCus(i){
    thisPage = i;
    loadItemCus();
}

// Phân trang sản phẩm bản mobile-tablet
let listProductmts = document.querySelectorAll('.js-products-item-mt');

function loadItemproductmt(){
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    listProductmts.forEach((item, key) => {
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    listPageproductmt();
}

loadItemproductmt();
function listPageproductmt(){
    let count = Math.ceil(listProductmts.length / limit);
    document.querySelector('.list-page-mt').innerHTML = '';
    for(i = 1; i<= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('page-active-mt');
        }
        newPage.setAttribute('onclick', "changePageproductmt(" + i + ")");
        document.querySelector('.list-page-mt').appendChild(newPage);
    }
}
function changePageproductmt(i){
    thisPage = i;
    loadItemproductmt();
}
// Phân trang khách hàng bản mobile-tablet
let listClientmts = document.querySelectorAll('.js-cus-item-mt');

function loadItemclientmt(){
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    listClientmts.forEach((item, key) => {
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    listPageclientmt();
}

loadItemclientmt();
function listPageclientmt(){
    let count = Math.ceil(listClientmts.length / limit);
    document.querySelector('.list-page-cus-mt').innerHTML = '';
    for(i = 1; i<= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('page-active-mt');
        }
        newPage.setAttribute('onclick', "changePageclientmt(" + i + ")");
        document.querySelector('.list-page-cus-mt').appendChild(newPage);
    }
}
function changePageclientmt(i){
    thisPage = i;
    loadItemclientmt();
}




//Hiển thị/Sửa/Xóa thêm sản phẩm
const addOnUsers = document.querySelectorAll('.js-user-addon');
const fixUsers = document.querySelectorAll('.js-user-fix');
const dlteUsers = document.querySelectorAll('.js-user-delete');

const modalAddOn = document.querySelector('.js-modal-addon');
const modalFix = document.querySelector('.js-modal-fix')
const modalDelete = document.querySelector('.js-modal-delete');

const deleteAddOns = document.querySelectorAll('.js-close-modal');
const deleteFixs = document.querySelectorAll('.js-close-fix');
const deleteDeletes = document.querySelectorAll('.js-close-delete');


// Hiển thị/Sửa/Xóa khách hàng
const addOnUserCuss = document.querySelectorAll('.js-user-cus-addon');
const fixUserCuss = document.querySelectorAll('.js-user-cus-fix');
const dlteUserCuss = document.querySelectorAll('.js-user-cus-delete');

const modalAddOnCus = document.querySelector('.js-modal-cus-addon');
const modalFixCus = document.querySelector('.js-modal-cus-fix')
const modalDeleteCus = document.querySelector('.js-modal-cus-delete');

const deleteAddOnCuss = document.querySelectorAll('.js-close-modal-cus');
const deleteFixCuss = document.querySelectorAll('.js-close-fix-cus');
const deleteDeleteCuss = document.querySelectorAll('.js-close-delete-cus');
const modalDetails = document.querySelectorAll('.js-modal-auth-form_addfix');
//Function
function showAddOn(){
    modalAddOn.classList.add('open')
}

function closeAddOn(){
    modalAddOn.classList.remove('open')
}

function showFix(){
    modalFix.classList.add('open')
}

function closeFix(){
    modalFix.classList.remove('open')
}

function showDelete(){
    modalDelete.classList.add('open')
}

function closeDelete(){
    modalDelete.classList.remove('open')
}

function showAddCus(){
    modalAddOnCus.classList.add('open')
}

function closeAddCus(){
    modalAddOnCus.classList.remove('open')
}

function showFixCus(){
    modalFixCus.classList.add('open')
}

function closeFixCus(){
    modalFixCus.classList.remove('open')
}

function showDeleteCus(){
    modalDeleteCus.classList.add('open')
}

function closeDeleteCus(){
    modalDeleteCus.classList.remove('open')
}
// Triển khai
for (const addOnUser of addOnUsers){
    addOnUser.addEventListener('click', showAddOn);
}
modalAddOn.addEventListener('click', closeAddOn);
for (const deleteAddOn of deleteAddOns){
    deleteAddOn.addEventListener('click', closeAddOn);
}

for (const fixUser of fixUsers){
    fixUser.addEventListener('click', showFix);
}
modalFix.addEventListener('click', closeFix);
for (const deleteFix of deleteFixs){
    deleteFix.addEventListener('click', closeFix);
}

for (const dlteUser of dlteUsers){
    dlteUser.addEventListener('click', showDelete);
}
modalDelete.addEventListener('click', closeDelete);
for (const deleteDelete of deleteDeletes){
    deleteDelete.addEventListener('click', closeDelete);
}



for (const addOnUserCus of addOnUserCuss){
    addOnUserCus.addEventListener('click', showAddCus);
}
modalAddOnCus.addEventListener('click', closeAddCus);
for (const deleteAddOnCus of deleteAddOnCuss){
    deleteAddOnCus.addEventListener('click', closeAddCus);
}

for (const fixUserCus of fixUserCuss){
    fixUserCus.addEventListener('click', showFixCus);
}
modalFixCus.addEventListener('click', closeFixCus);
for (const deleteFixCus of deleteFixCuss){
    deleteFixCus.addEventListener('click', closeFixCus);
}

for (const dlteUserCus of dlteUserCuss){
    dlteUserCus.addEventListener('click', showDeleteCus);
}
modalDeleteCus.addEventListener('click', closeDeleteCus);
for (const deleteDeleteCus of deleteDeleteCuss){
    deleteDeleteCus.addEventListener('click', closeDeleteCus);
}

for (const modalDetail of modalDetails){
    modalDetail.addEventListener('click', function(event){
        event.stopPropagation();
    });
}

