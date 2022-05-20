'use strict';


/**
 * Get available liveodds for an event
 *
 * id String Unique identifier of the resource.
 * xOddClient String Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.
 * returns List
 **/
exports.eventsIdLiveoddsGET = function(id,xOddClient) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "eventId" : 0,
  "oddProvider" : {
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "name" : "name",
    "id" : 0,
    "url" : "url"
  }
}, {
  "eventId" : 0,
  "oddProvider" : {
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "name" : "name",
    "id" : 0,
    "url" : "url"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of odds available in the system
 *
 * id String Unique identifier of the resource.
 * xOddClient String Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.
 * returns List
 **/
exports.eventsIdOddsGET = function(id,xOddClient) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "eventId" : 0,
  "oddProvider" : {
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "name" : "name",
    "id" : 0,
    "url" : "url"
  }
}, {
  "eventId" : 0,
  "oddProvider" : {
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "name" : "name",
    "id" : 0,
    "url" : "url"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get available pre-game odds for an Event
 *
 * id String Unique identifier of the resource.
 * xOddClient String Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.
 * returns List
 **/
exports.eventsIdPregameoddsGET = function(id,xOddClient) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "eventId" : 0,
  "oddProvider" : {
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "name" : "name",
    "id" : 0,
    "url" : "url"
  }
}, {
  "eventId" : 0,
  "oddProvider" : {
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "name" : "name",
    "id" : 0,
    "url" : "url"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of liveodds available in the system
 *
 * xOddClient String Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.
 * returns List
 **/
exports.liveoddsGET = function(xOddClient) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "eventId" : 0,
  "oddProvider" : {
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "name" : "name",
    "id" : 0,
    "url" : "url"
  }
}, {
  "eventId" : 0,
  "oddProvider" : {
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "name" : "name",
    "id" : 0,
    "url" : "url"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return a list of OddProviders available in the system. If X-Odd-Client is specified they will be filtered and ordered by the client configuration.
 *
 * xOddClient String Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.
 * returns List
 **/
exports.odd_providersGET = function(xOddClient) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "country" : {
    "code" : "code",
    "name" : "England",
    "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
    "id" : 0
  },
  "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
  "name" : "name",
  "id" : 0,
  "url" : "url"
}, {
  "country" : {
    "code" : "code",
    "name" : "England",
    "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
    "id" : 0
  },
  "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
  "name" : "name",
  "id" : 0,
  "url" : "url"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a list of Odds
 *
 * odd_client String Odd client code
 * sport_type String Sport type filter
 * event_type String Event type filter
 * from_event_start_time Date Return odds for Events with start_time >= from_event_start_time. RFC 3339 format (optional)
 * to_event_start_time Date Return odds for Events with start_time <= to_event_start_time. RFC 3339 format (optional)
 * team_id Integer Team ID (optional)
 * team_ids String List for team IDs separated by commas. (optional)
 * event_order String Order matching events for a specific client (optional)
 * match_ids String List for match IDs separated by commas. (optional)
 * tournament_ids String List for tournament IDs separated by commas. (optional)
 * season_ids String List for season IDs separated by commas. (optional)
 * odds_type String Pregame or live odds selector. (optional)
 * returns List
 **/
exports.oddsGET = function(odd_client,sport_type,event_type,from_event_start_time,to_event_start_time,team_id,team_ids,event_order,match_ids,tournament_ids,season_ids,odds_type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "eventId" : 0,
  "oddProvider" : {
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "name" : "name",
    "id" : 0,
    "url" : "url"
  }
}, {
  "eventId" : 0,
  "oddProvider" : {
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "name" : "name",
    "id" : 0,
    "url" : "url"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a list of Odd Providers which have odds available for a given Event
 *
 * xOddClient String Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.
 * from_time Date Return odds for Events with start_time >= from_time. RFC 3339 format (optional)
 * to_time Date Return odds for Events with start_time <= to_time. RFC 3339 format (optional)
 * returns List
 **/
exports.pregameoddsGET = function(xOddClient,from_time,to_time) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "eventId" : 0,
  "oddProvider" : {
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "name" : "name",
    "id" : 0,
    "url" : "url"
  }
}, {
  "eventId" : 0,
  "oddProvider" : {
    "country" : {
      "code" : "code",
      "name" : "England",
      "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
      "id" : 0
    },
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "name" : "name",
    "id" : 0,
    "url" : "url"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

