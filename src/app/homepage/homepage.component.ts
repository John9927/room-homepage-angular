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
    title: 'We are available all across the globe',
    description: 'With stores all over the world, it s easy for you to find furniture for your home or place of business. Locally, we re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Dont hesitate to contact us today.',
    img: './../../assets/images/desktop-image-hero-2.jpg'
  },
  {
    title: 'Manufactured with the best materials',
    description: 'Our modern furniture store provinde a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of exprerience in this industry, we understand what customers want for their home and office.',
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
  s
  readonly slides: Slide[] = arr;
  readonly slideStatic: SlideStatic[] = arr2;

  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void { }

  onClickArrowRight() {
    const tempIndex = this.currentIndex + 1;
    if (tempIndex < this.slides.length) {
      this.currentIndex++;
    }
    else {
      this.currentIndex = 0;
    }
    console.log(this.currentIndex)
  }

  onClickArrowLeft() {
    const tempIndex = this.currentIndex - 1;
    if (tempIndex < 0) {
      this.currentIndex = this.slides.length - 1;
    }
    else {
      this.currentIndex--;
    }
    console.log(this.currentIndex)

  }

}
