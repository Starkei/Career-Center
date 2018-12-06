import { trigger, transition, style, animate, state } from "@angular/animations";

export const Select = [
  trigger('select', [

    state('on', style({
      transform: 'scale(1)'
    })),

    state('in', style({
      transform: 'scale(1.2)'
    })),

    transition('on => in', [
      animate('400ms ease-in')
    ]),
    transition('in => on', [
      animate('400ms ease-in')
    ])
  ])
]
