import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ScoreService } from './score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  score$: Subject<number>;

  details: {description: string, points: number}[] = [];

  constructor(private scoreService: ScoreService) {
    this.score$ = scoreService.score$;
  }

  ngOnInit(): void {
    this.scoreService.resetScore();

    this.score(this.scoreService.scoreApi, 'API endpoints &amp; MongoDB connection');
    this.score(this.scoreService.scoreApiSubdomain, 'API subdomain (http://api.localhost)');
    this.score(this.scoreService.scoreAdminSubdomain, 'Admin subdomain (http://admin.localhost)');
    this.score(this.scoreService.scorePizzaSubdomains, 'Pizza subdomains (http://margherita.localhost)');
    this.score(this.scoreService.scoreHttpsProtocol, 'HTTPS protocol (https://localhost)');
  }

  private score (scorer: () => Observable<number>, description: string) {
    scorer.bind(this.scoreService)().subscribe((points) => {
      this.details.push({ description, points });
    });
  }
}
