'use strict';

exports.topic = {
  name: 'debug',
  description: 'CLI debugging tools',
};

exports.commands = [
  require('./commands/debug')
];

exports.postInstallHelp = `
Help debug your CLI.
`;
