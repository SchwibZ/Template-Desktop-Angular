import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ChartjsComponent = class ChartjsComponent {
    constructor() {
        this.lineChartData = [{
                label: '# of Votes',
                data: [10, 19, 3, 5, 2, 3],
                borderWidth: 1,
                fill: false
            }];
        this.lineChartLabels = ["2013", "2014", "2014", "2015", "2016", "2017"];
        this.lineChartOptions = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            },
            legend: {
                display: false
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        };
        this.lineChartColors = [
            {
                borderColor: 'rgba(255,99,132,1)'
            }
        ];
        this.barChartData = [{
                label: '# of Votes',
                data: [10, 19, 3, 5, 2, 3],
                borderWidth: 1,
                fill: false
            }];
        this.barChartLabels = ["2013", "2014", "2014", "2015", "2016", "2017"];
        this.barChartOptions = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            },
            legend: {
                display: false
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        };
        this.barChartColors = [
            {
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ]
            }
        ];
        this.areaChartData = [{
                label: '# of Votes',
                data: [10, 19, 3, 5, 2, 3],
                borderWidth: 1,
                fill: true
            }];
        this.areaChartLabels = ["2013", "2014", "2014", "2015", "2016", "2017"];
        this.areaChartOptions = {};
        this.areaChartColors = [
            {
                borderColor: 'rgba(255,99,132,1)',
                backgroundColor: 'rgba(255,99,132,.2)'
            }
        ];
        this.doughnutPieChartData = [
            {
                data: [30, 40, 30],
            }
        ];
        this.doughnutPieChartLabels = ["Pink", "Blue", "Yellow"];
        this.doughnutPieChartOptions = {
            responsive: true,
            animation: {
                animateScale: true,
                animateRotate: true
            }
        };
        this.doughnutPieChartColors = [
            {
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ]
            }
        ];
        this.scatterChartData = [
            {
                label: 'First Dataset',
                data: [{
                        x: -10,
                        y: 0
                    },
                    {
                        x: 0,
                        y: 3
                    },
                    {
                        x: -25,
                        y: 5
                    },
                    {
                        x: 40,
                        y: 5
                    }
                ],
                borderWidth: 1
            },
            {
                label: 'Second Dataset',
                data: [{
                        x: 10,
                        y: 5
                    },
                    {
                        x: 20,
                        y: -30
                    },
                    {
                        x: -25,
                        y: 15
                    },
                    {
                        x: -10,
                        y: 5
                    }
                ],
                borderWidth: 1
            }
        ];
        this.scatterChartOptions = {
            scales: {
                xAxes: [{
                        type: 'linear',
                        position: 'bottom'
                    }]
            }
        };
        this.scatterChartColors = [
            {
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)'
                ]
            },
            {
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ]
            }
        ];
    }
    ngOnInit() {
    }
};
ChartjsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-chartjs',
        templateUrl: './chartjs.component.html',
        styleUrls: ['./chartjs.component.scss']
    })
], ChartjsComponent);
export { ChartjsComponent };
//# sourceMappingURL=chartjs.component.js.map