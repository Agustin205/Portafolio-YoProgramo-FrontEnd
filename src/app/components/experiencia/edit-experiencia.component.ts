import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/Model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab:Experiencia=null;

  constructor(private sExperienciaService:SExperienciaService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.params['id']; 
    this.sExperienciaService.detail(id).subscribe(data=>{this.expLab=data},err =>{alert("Error al modificar experiencia");this.router.navigate(['']);})
  }

  onUpdate(): void{
    const id= this.activatedRoute.snapshot.params['id']; 
    this.sExperienciaService.update(id,this.expLab).subscribe(data=>{this.router.navigate(['']);},err=>{alert("Error al modificar experiencia");this.router.navigate(['']);})
   }

}
