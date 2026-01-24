// Create a Warrior class
// It must support level, rank, experience, achievements, training(event), and battle(enemy_level) methods

class Warrior{
  constructor(){
    this.wLevel = 1
    this.wRank = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"]
    this.wExperience = 100
    this.wAchievements = []
  }
  
  level(){
    return this.wLevel
  }
  
  experience(){
    return this.wExperience
  }
  
  rank(){
    return this.wRank[Math.floor(this.wLevel / 10)]
  }
  
  achievements(){
    return this.wAchievements
  }
  
  training([description, exp, minLevel]){
    if(this.wLevel <= minLevel){
      return "Not strong enough"
    }

    this._updateExperience(exp)
    this.wAchievements.push(description)
    return description
  }
  
  battle(enemy_level){
    if(enemy_level < 0 && enemy_level > 100) return "Invalid level"

    const original_level = this.wLevel
    const level_diff = enemy_level - original_level

    const myRank = Math.floor(original_level / 10)
    const enemyRank = Math.floor(enemy_level / 10)

    if(level_diff >= 5 && enemyRank > myRank){
      return "You've been defeated"
    }

    let exp_gain = 0

    if(level_diff <= -2){
      exp_gain = 0
    }
    else if(level_diff === -1){
      exp_gain = 5
    }
    else if(level_diff === 0){
      exp_gain = 10
    } else{
      exp_gain = 20 * level_diff * level_diff
    }

    this._updateExperience(exp_gain)

    if(original_level - enemy_level >= 2){
      return "Easy fight"
    } else if(original_level > enemy_level){
      return "A good fight"
    } else{
      return "An intense fight"
    }
  }

  _updateExperience(exp){
    this.wExperience = Math.min(10000, this.wExperience + exp)
    this.wLevel = Math.min(100, Math.floor(this.wExperience / 100))
  }
}