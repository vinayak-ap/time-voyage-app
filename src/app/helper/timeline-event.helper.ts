
export interface TimelineEvent {
    id: number;
    title: string;
    date: number;
    description: string;
    image: string;
    video: string;
}

export enum Operator {
    equal = 'equal',
    before = 'before',
    after = 'after',
    between = 'between',
}

export class PipeTransformConfig {
    constructor(
        public searchText: string = '',
        public isFilterApplied: boolean = false,
        public filterOptions: FilterOptions = new FilterOptions(),
    ) { }
}

export class FilterOptions {
    constructor(
        public operator: Operator = Operator.between,
        public date?: number,
        public startDate?: number,
        public endDate?: number
    ) { }
}
