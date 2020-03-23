'use strict';

class Element{
    constructor(name, locator){
        this.locator = locator;
        this.name = name;
    }

    setParent(parent){
        this.parent = parent;
    }
}

module.exports (Elements);