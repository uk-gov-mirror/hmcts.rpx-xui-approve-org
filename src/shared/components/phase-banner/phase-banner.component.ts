import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-phase-banner',
	templateUrl: './phase-banner.component.html',
})
export class PhaseBannerComponent {
	@Input() type: string;
}
