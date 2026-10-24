const inputTarea = document.getElementById('inputTarea');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');

btnAgregar.addEventListener('click',() => {
    const tarea = inputTarea.value.trim();

 if (tarea === ''){
    alert("agregar tarea");
    return;
 }
 const nuevaTarea = document.createElement('li')
 nuevaTarea.textContent=tarea;
 listaTareas.appendChild(nuevaTarea);
 

 const btnEliminar = document.createElement('button')
 btnEliminar.textContent='Eliminar'
 nuevaTarea.appendChild(btnEliminar);


btnEliminar.addEventListener('click',() => {
 nuevaTarea.remove();
});
 
 inputTarea.value='';

});
 