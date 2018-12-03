import { trigger, transition, style, animate } from "@angular/animations";

export const SwimmingOutRight = [
  trigger('swimingOutRight', [
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate('400ms ease-in', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      animate('400ms ease-in', style({transform: 'translateX(100%)'}))
    ])
  ])
]
