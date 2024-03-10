import { Pipe, PipeTransform } from '@angular/core';
import { Operator, PipeTransformConfig } from "../helper/timeline-event.helper";

@Pipe({
    standalone: true,
    name: 'eventFilter',
})
export class EventFilterPipe implements PipeTransform {

    transform(records: Array<any>, config: PipeTransformConfig): Array<any> {

        /**
         * Filter records according to the searchText provided
         * This will only search for the title in the event
         */
        if (config.searchText && config.searchText.trim() !== '') {
            records = records.filter(record => record.title.toLowerCase().includes(config.searchText.toLowerCase()) || record.date.toString().includes(config.searchText));
        }

        /**
         * Filter records according to the operator and values provided
         * This will only search for the year in the event
         */
        if (config.isFilterApplied) {
            records = this.getFilteredRecords(records, config);
        }

        return records;
    }

    getFilteredRecords(records: Array<any>, config: PipeTransformConfig): Array<any> {

        if (config.filterOptions.date || (config.filterOptions.startDate && config.filterOptions.endDate)) {
            switch (config.filterOptions.operator) {
                case Operator.equal:
                    return records.filter(record => (config.filterOptions.date && (record.date == config.filterOptions.date)));
                case Operator.before:
                    return records.filter(record => (config.filterOptions.date && (record.date < config.filterOptions.date)));
                case Operator.after:
                    return records.filter(record => (config.filterOptions.date && (record.date > config.filterOptions.date)));
                case Operator.between:
                    return records.filter(record => ((config.filterOptions.startDate && config.filterOptions.endDate) && (config.filterOptions.startDate < record.date && record.date < config.filterOptions.endDate)));
            }
        }
        return records;
    }
}
