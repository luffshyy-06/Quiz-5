'use strict';

/**
 * movie-tape service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::movie-tape.movie-tape');
