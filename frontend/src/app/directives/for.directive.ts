import { Directive, OnInit, Input } from "@angular/core";

@Directive({
  selector: "[appFor]",
})
export class ForDirective implements OnInit {
  @Input("appForOf") index: number;

  constructor() {}
  ngOnInit(): void {}
}
