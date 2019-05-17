import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { MOCKDATAMAPPINGS } from '../govuk-table/mock-data-mappings';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
    selector: 'lib-govuk-table',
    templateUrl: './govuk-table.component.html',
    styleUrls: ['./govuk-table.component.scss']
})
export class GovukTableComponent implements OnInit{

    @Input() classes = '';
    @Input() caption = 'Dates and amounts';
    @Input() firstCellIsHeader = true;
    @Output() valueChange = new EventEmitter();
    inputForm: FormGroup;

    @Input() rows;

    @Input() columnConfig: GovukTableColumnConfig[] = [
        { header: MOCKDATAMAPPINGS[0].header, key: MOCKDATAMAPPINGS[0].key, type: MOCKDATAMAPPINGS[0].type },
        { header: MOCKDATAMAPPINGS[1].header, key: MOCKDATAMAPPINGS[1].key },
        { header: MOCKDATAMAPPINGS[2].header, key: MOCKDATAMAPPINGS[2].key, class: MOCKDATAMAPPINGS[2].class },
        { header: MOCKDATAMAPPINGS[3].header, key: MOCKDATAMAPPINGS[3].key, type: MOCKDATAMAPPINGS[3].type,
         multiColumnMapping: MOCKDATAMAPPINGS[3].multiColumnMapping }
    ];

    constructor(private fb: FormBuilder) { }
    ngOnInit(): void {
    this.inputForm = this.fb.group({
      checkedInput: this.fb.array([])
    });
  }

processCheckboxInput(checkboxInputArray) {
  const formArray = <FormArray>this.inputForm.controls.checkedInput;

  if (checkboxInputArray.isChecked) {
    formArray.push(new FormControl(checkboxInputArray.id));
  } else {
    let index = formArray.controls.findIndex(x => x.value == checkboxInputArray.id)
    formArray.removeAt(index);
  }

  this.valueChange.emit(formArray);
}

}

export class GovukTableColumnConfig {
    header: string;
    key: string;
    type?: string;
    class?: string;
    multiColumnMapping?: string;
    constructor() {}

  }
