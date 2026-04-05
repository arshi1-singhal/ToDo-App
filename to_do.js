let todoList=[
    
    {item:'buy milk', dueDate: '4/10/2023'}, //creates arrray of objects
    {item:'buy chocolate',dueDate: '4/10/2023'}
];
displayItems();
function addTodo(){
    let inputElement=document.querySelector('#todo_input')
    let todoItem = inputElement.value;
    let dateElement=document.querySelector('#todo_date');
    let todoDate=dateElement.value;
    todoList.push({item:todoItem,dueDate:todoDate});
    inputElement.value=' ';
    dateElement.value='';
    displayItems();
}
function displayItems(){
    let containerElement=document.querySelector('.todo_container');

    let newHtml=``;

    for(let i=0;i<todoList.length;i++ ) {
        let{item,dueDate}=todoList[i];
        newHtml +=`
        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button onclick="todoList.splice(${i},1);displayItems();" class="delete">Delete</button>
        
        `;

         
    }
    containerElement.innerHTML=newHtml;

}
