import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartData, ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Type de graphique (modifiable par l'utilisateur)
  public chartType: ChartType = 'bar';

  // Données du graphique
  public chartData: ChartData<'bar' | 'line'> = {
    labels: [],
    datasets: []
  };

  // Options du graphique
  public chartOptions: ChartOptions = {
    responsive: true,
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 5,
        backgroundColor: '#06BBCC'
      }
    },
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };

  selectedPeriod: string = 'semaine';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<any>('http://localhost:8080/api/mental-state/stats/weeks-by-month')
      .subscribe((res) => {
        const months = Object.keys(res); // JANUARY, FEBRUARY...
        const weeksSet = new Set<string>();

        // Identifier toutes les semaines présentes
        months.forEach(month => {
          Object.keys(res[month]).forEach(week => weeksSet.add(week));
        });

        const weeks = Array.from(weeksSet).sort();

        // Créer un dataset pour chaque semaine
        const datasets = weeks.map((week, index) => ({
          label: week,
          data: months.map(month => res[month]?.[week] || 0),
          backgroundColor: this.getColor(index),
          borderColor: this.getColor(index),
          fill: false
        }));

        this.chartData = {
          labels: months,
          datasets
        };
      });
  }

  // 🔁 Génère une couleur différente pour chaque ligne/barre
  getColor(index: number): string {
    const colors = ['#06BBCC', '#f44336', '#ffa726', '#66bb6a', '#ab47bc', '#42a5f5', '#ef5350'];
    return colors[index % colors.length];
  }
}
