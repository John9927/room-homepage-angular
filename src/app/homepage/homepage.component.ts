import { Component, OnInit } from '@angular/core';

type Slide = {
  title: string,
  description: string,
  img: any
}

const arr: Slide[] = [
  {
    title: 'Discover innovative ways to decorate',
    description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in you own style with our collection and makke property a reflextion of you and what you love.',
    img: './../../assets/images/desktop-image-hero-1.jpg'
  },
  {
    title: 'PAGINA 2',
    description: 'PAGINA 2',
    img: './../../assets/images/desktop-image-hero-2.jpg'
  },
  {
    title: 'PAGINA 3',
    description: 'PAGINA 3',
    img: './../../assets/images/desktop-image-hero-3.jpg'
  }
]

type SlideStatic = {
  title: string,
  description: string,
  img: any,
  img2: any
}

const arr2: SlideStatic[] = [
  {
    title: 'About Our Furniture',
    description: 'Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and thar inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. product specialists are available to help you create your dream space.',
    img: './../../assets/images/image-about-dark.jpg',
    img2: './../../assets/images/image-about-light.jpg'
  },
]
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  readonly slide: Slide[] = arr;
  readonly slideStatic: SlideStatic[] = arr2

  constructor() { }

  ngOnInit(): void {
    console.log(this.slide)
  }


  onClickArrowLeft() {
    console.log("OnClick Arrow Left");
  }

  onClickArrowRight() {
    console.log("OnClick Arrow Right");
  }
}
