import { observable, action, map } from 'mobx'
import { LOCATIONS } from '../constants'

export default class LocationsStore {
  @observable car = LOCATIONS.CAR

  @action reachDestination = () => {
    this.car = LOCATIONS.DEST
  }
}
