import { Component } from '@angular/core';
import { IndexService } from '../service/index.service';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

	menu:any = [];
	chef:any = [];

	constructor(
		private index: IndexService
	) { }

	ngOnInit() {
		this.index.getMenuList().subscribe(
			(data: any) => {
				if (data.status == "OK") {
					this.chef = data.result.Cheflist;
					this.menu = data.result.Menulist;
				}
			}
		);
	}

}
