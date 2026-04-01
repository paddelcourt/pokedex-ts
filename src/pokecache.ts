export type CacheEntry<T> = {

    createdAt: number
    val: T

}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  add<T>(key: string, val: T) {
    const currentDate = Date.now()
   this.#cache.set(key, {createdAt: currentDate, val: val})
  }

  get<T>(key: string) {
    return this.#cache.get(key)?.val || undefined
  }

  #reap() {
    for (let [key, value] of this.#cache) {
        if (value.createdAt < (Date.now() - this.#interval)) {
            this.#cache.delete(key)
    }
    }
        }
    #startReapLoop() {
        this.#reapIntervalId = setInterval(this.#reap, this.#interval)
         

    }

    constructor(value: number) {
        this.#interval = value
        setInterval(() => this.#reap(), this.#interval)


    }

    stopReapLoop() {
        clearInterval(this.#reapIntervalId)
        this.#reapIntervalId = undefined
    }

  


}