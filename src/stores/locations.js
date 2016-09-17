import { observable, action, map } from 'mobx'
import { LOCATIONS, ROUTE } from '../constants'

export default class LocationsStore {
  @observable car = LOCATIONS.CAR
  @observable route = ROUTE

  @action reachDestination = () => {
    this.car = LOCATIONS.DEST
  }
}
