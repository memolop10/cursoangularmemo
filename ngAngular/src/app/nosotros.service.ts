export class EmpleadosService{

    listaEmpleados:any[]=[
        {id:1, nombre:'memo',paterno:'lopez'},
        {id:2, nombre:'Rose',paterno:'Ortega'},
        {id:3, nombre:'Alejandro',paterno:'castro'}
    ];

    listaDeEmpleados(){
        return this.listaEmpleados;
    }

}