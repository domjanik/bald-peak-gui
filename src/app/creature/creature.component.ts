import { Component, OnInit, Input } from "@angular/core";
import { SimulatorAccessService } from "../services/simulator-access.service";

@Component({
  selector: "[creature]",
  templateUrl: "./creature.component.html",
  styleUrls: ["./creature.component.css"]
})
export class CreatureComponent implements OnInit {
  @Input() data: { name: string, id: number, creationDate: Date, inventory: any };
  @Input() isOpen: boolean;
  constructor(private simulationAccessService: SimulatorAccessService) {
      this.inventory = new Array<any>();
      for (let i = 0; i < 10; i++) {
        this.inventory.push(i);
    }
  }

  inventory: Array<any>;

  ngOnInit() {
  }

  moveCreature(event, direction) {
    event.preventDefault();
    event.stopPropagation();

    const moveObject = {
      direction: direction,
      id: this.data.id
    };
    this.simulationAccessService.moveCreature(moveObject).subscribe((data: any) => {
    });
  }
}
