import { Component, OnInit,HostListener, ElementRef, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {
  
  @HostListener('click',  ['$event']) onclick(){
    const x = event.target
     console.log(x)
  }

  next(){
    let x = this.el.nativeElement.querySelector('.active').nextElementSibling;
    x.click()
  }
  previous(){
    let x = this.el.nativeElement.querySelector('.active').previousElementSibling;
    x.click()
  }
  constructor(private el: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document: any) {}

  showPosition(pos){
    console.log(pos.coords.latitude)
  }
  position = navigator.geolocation.getCurrentPosition(this.showPosition)

  changeAtt(event){
    event.target.style.color = 'blue';
    event.target.style.backgroundColor = 'yellow';
    event.target.previousElementSibling.style.color = 'black';
    event.target.previousElementSibling.style.backgroundColor = 'white';
    event.target.nextElementSibling.style.color = 'black';
    event.target.nextElementSibling.style.backgroundColor = 'white';
    event.target.previousElementSibling.setAttribute('class', 'btn btn-md');
    event.target.setAttribute('class', 'btn btn-md active');
    event.target.nextElementSibling.setAttribute('class', 'btn btn-md');
  }

  ngOnInit() {
    let esto = this.renderer
    let div = this.renderer.createElement('div');
    let text = this.renderer.createText('this is the text I need');


    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div)
    
    // QUERY SELECTORS=========================
    let header = this.el.nativeElement.querySelector('h4')
    let color = this.el.nativeElement.querySelector('#button-2');
    let style = this.el.nativeElement.querySelectorAll('button');
    header.innerHTML = "This is an H4"
    style[0].style.background = 'black'
    style[0].style.color = 'white'
    style[1].style.color = 'red';
    color.style.border = '1px solid black';
    let active = this.el.nativeElement.querySelector('.active');
    this.renderer.setStyle(header, 'background', 'yellow');
    this.renderer.setStyle(active, 'background', 'yellow');
    // QUERY SELECTORS========================
// return this.test
console.log(this.el.nativeElement.children)
console.log(this.document.documentElement)
console.log(document.documentElement)
console.log(window)


   
    // console.log(this.el.nativeElement.querySelector('p').innerHTML)
    // console.log(this.el.nativeElement )
  //   console.log(this.el.nativeElement)
  //  document.write('<p>' + document.getElementById('test').innerHTML + '</p>')
  //  if(document.activeElement.children[0].children[1].children[1].innerHTML == 'this is a test'){
  //    console.log('Active Element children = true')
  //  }else{
  //    console.log('Active Element children = false')
  //  }
   
  //  document.getElementById('test').style.color = 'blue';
  //  document.getElementById('test').style.backgroundColor = 'yellow';
   
  //  let esto = document.activeElement.children[0].children[1].children[0]
  //  console.log("checking children " + esto)
  //  console.log("Available height is:" + screen.height + " available width:" + screen.width )
  //  console.log('navigator samples:' +  navigator.cookieEnabled + " " + navigator.platform + " " + navigator.onLine);
  //  console.log()
  //  console.log(document.activeElement.children[0].children[1].children[0].children[0].attributes.
  }
  }

