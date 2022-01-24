import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-mycaffein',
  templateUrl: './mycaffein.component.html',
  styleUrls: ['./mycaffein.component.scss']
})

export class MycaffeinComponent implements OnInit {

  constructor() { }

  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Café filtre', sound: 'Woof!'},
    {name: 'Expresso', sound: 'Woof!'},
    {name: 'Décaféiné', sound: 'Woof!'},
    {name: 'Café instantané', sound: 'Woof!'},
    {name: 'Thé noir', sound: 'Woof!'},
    {name: 'Thé vert', sound: 'Woof!'},
    {name: 'Chocolat chaud', sound: 'Woof!'},
    {name: 'Coca-Cola', sound: 'Woof!'},
    {name: 'Coca-Cola light/zero', sound: 'Woof!'},
    {name: 'Fritz-Kola', sound: 'Meow!'},
    {name: 'Club Mate', sound: 'Moo!'},
    {name: 'Red Bull', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  ngOnInit(): void {

  }

}
