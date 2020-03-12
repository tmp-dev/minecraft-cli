const axios = require('axios');

/**
 * Constant variables
 */
const minecraft_game_id = 432;

/**
 * constant functions
 */
const wrapper = axios.create({
    baseUrl: 'https://addons-ecs.forgesvc.net/api/v2/',
    headers: { 'User-Agent': 'minecraft-cli@0.0.1' }
});

/**
 * Route information: https://twitchappapi.docs.apiary.io/
 */

exports = {

    call: async (route, method = 'GET') => {
        if ( !route.startsWith('/') ) route = `/${route}`;

        try {
            const response = await wrapper(route, method);
            return response.data;
        } catch ( error ) {
            reject(`Error while calling "${route}". Error: ${error.message}`);
        }
    },

    listMinecraftVersions: async () => {
        return await this.call('minecraft/version');
    },

    getMinecraftVersion: async versionString => {
        return await this.call( `minecraft/version/${versionString}` );
    },

}