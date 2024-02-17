import {MatchInterface} from "@app/interfaces/match.interface";

export class Match {
  private matchData: MatchInterface;

  constructor(private data: string) {
    this.matchData = JSON.parse(data) as MatchInterface;
    this.validateData();
  }

  private validateData(): boolean {
    if(this.matchData.teams.length != 2) {
      console.error("Invalid number of teams");
      return false;
    }
    if(this.matchData.score.length != 3) {
      console.error("Invalid number of scores");
      return false;
    }
    return true;
  }

  /*
   * ------------- GETTERS -------------
   */
  getId(): number {
    return this.matchData.id;
  }

  getTeams(): number[][] {
    return this.matchData.teams
  }

  getScore(): number[][] {
    return this.matchData.score;
  }
}
