'use strict';

exports.__esModule = true;
var rules = exports.rules = {
  'no-unresolved': require('./rules/no-unresolved'),
  'named': require('./rules/named'),
  'default': require('./rules/default'),
  'namespace': require('./rules/namespace'),
  'no-namespace': require('./rules/no-namespace'),
  'export': require('./rules/export'),
  'no-mutable-exports': require('./rules/no-mutable-exports'),
  'extensions': require('./rules/extensions'),
  'no-restricted-paths': require('./rules/no-restricted-paths'),
  'no-internal-modules': require('./rules/no-internal-modules'),

  'no-named-as-default': require('./rules/no-named-as-default'),
  'no-named-as-default-member': require('./rules/no-named-as-default-member'),

  'no-commonjs': require('./rules/no-commonjs'),
  'no-amd': require('./rules/no-amd'),
  'no-duplicates': require('./rules/no-duplicates'),
  'imports-first': require('./rules/imports-first'),
  'max-dependencies': require('./rules/max-dependencies'),
  'no-extraneous-dependencies': require('./rules/no-extraneous-dependencies'),
  'no-absolute-path': require('./rules/no-absolute-path'),
  'no-nodejs-modules': require('./rules/no-nodejs-modules'),
  'order': require('./rules/order'),
  'newline-after-import': require('./rules/newline-after-import'),
  'prefer-default-export': require('./rules/prefer-default-export'),

  // metadata-based
  'no-deprecated': require('./rules/no-deprecated')
};

var configs = exports.configs = {
  'errors': require('../config/errors'),
  'warnings': require('../config/warnings'),

  // shhhh... work in progress "secret" rules
  'stage-0': require('../config/stage-0'),

  // useful stuff for folks using various environments
  'react': require('../config/react'),
  'react-native': require('../config/react-native'),
  'electron': require('../config/electron')
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJ1bGVzIiwicmVxdWlyZSIsImNvbmZpZ3MiXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQU1BLHdCQUFRO0FBQ25CLG1CQUFpQkMsUUFBUSx1QkFBUixDQURFO0FBRW5CLFdBQVNBLFFBQVEsZUFBUixDQUZVO0FBR25CLGFBQVdBLFFBQVEsaUJBQVIsQ0FIUTtBQUluQixlQUFhQSxRQUFRLG1CQUFSLENBSk07QUFLbkIsa0JBQWdCQSxRQUFRLHNCQUFSLENBTEc7QUFNbkIsWUFBVUEsUUFBUSxnQkFBUixDQU5TO0FBT25CLHdCQUFzQkEsUUFBUSw0QkFBUixDQVBIO0FBUW5CLGdCQUFjQSxRQUFRLG9CQUFSLENBUks7QUFTbkIseUJBQXVCQSxRQUFRLDZCQUFSLENBVEo7QUFVbkIseUJBQXVCQSxRQUFRLDZCQUFSLENBVko7O0FBWW5CLHlCQUF1QkEsUUFBUSw2QkFBUixDQVpKO0FBYW5CLGdDQUE4QkEsUUFBUSxvQ0FBUixDQWJYOztBQWVuQixpQkFBZUEsUUFBUSxxQkFBUixDQWZJO0FBZ0JuQixZQUFVQSxRQUFRLGdCQUFSLENBaEJTO0FBaUJuQixtQkFBaUJBLFFBQVEsdUJBQVIsQ0FqQkU7QUFrQm5CLG1CQUFpQkEsUUFBUSx1QkFBUixDQWxCRTtBQW1CbkIsc0JBQW9CQSxRQUFRLDBCQUFSLENBbkJEO0FBb0JuQixnQ0FBOEJBLFFBQVEsb0NBQVIsQ0FwQlg7QUFxQm5CLHNCQUFvQkEsUUFBUSwwQkFBUixDQXJCRDtBQXNCbkIsdUJBQXFCQSxRQUFRLDJCQUFSLENBdEJGO0FBdUJuQixXQUFTQSxRQUFRLGVBQVIsQ0F2QlU7QUF3Qm5CLDBCQUF3QkEsUUFBUSw4QkFBUixDQXhCTDtBQXlCbkIsMkJBQXlCQSxRQUFRLCtCQUFSLENBekJOOztBQTJCbkI7QUFDQSxtQkFBaUJBLFFBQVEsdUJBQVI7QUE1QkUsQ0FBZDs7QUErQkEsSUFBTUMsNEJBQVU7QUFDckIsWUFBVUQsUUFBUSxrQkFBUixDQURXO0FBRXJCLGNBQVlBLFFBQVEsb0JBQVIsQ0FGUzs7QUFJckI7QUFDQSxhQUFXQSxRQUFRLG1CQUFSLENBTFU7O0FBT3JCO0FBQ0EsV0FBU0EsUUFBUSxpQkFBUixDQVJZO0FBU3JCLGtCQUFnQkEsUUFBUSx3QkFBUixDQVRLO0FBVXJCLGNBQVlBLFFBQVEsb0JBQVI7QUFWUyxDQUFoQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBydWxlcyA9IHtcbiAgJ25vLXVucmVzb2x2ZWQnOiByZXF1aXJlKCcuL3J1bGVzL25vLXVucmVzb2x2ZWQnKSxcbiAgJ25hbWVkJzogcmVxdWlyZSgnLi9ydWxlcy9uYW1lZCcpLFxuICAnZGVmYXVsdCc6IHJlcXVpcmUoJy4vcnVsZXMvZGVmYXVsdCcpLFxuICAnbmFtZXNwYWNlJzogcmVxdWlyZSgnLi9ydWxlcy9uYW1lc3BhY2UnKSxcbiAgJ25vLW5hbWVzcGFjZSc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tbmFtZXNwYWNlJyksXG4gICdleHBvcnQnOiByZXF1aXJlKCcuL3J1bGVzL2V4cG9ydCcpLFxuICAnbm8tbXV0YWJsZS1leHBvcnRzJzogcmVxdWlyZSgnLi9ydWxlcy9uby1tdXRhYmxlLWV4cG9ydHMnKSxcbiAgJ2V4dGVuc2lvbnMnOiByZXF1aXJlKCcuL3J1bGVzL2V4dGVuc2lvbnMnKSxcbiAgJ25vLXJlc3RyaWN0ZWQtcGF0aHMnOiByZXF1aXJlKCcuL3J1bGVzL25vLXJlc3RyaWN0ZWQtcGF0aHMnKSxcbiAgJ25vLWludGVybmFsLW1vZHVsZXMnOiByZXF1aXJlKCcuL3J1bGVzL25vLWludGVybmFsLW1vZHVsZXMnKSxcblxuICAnbm8tbmFtZWQtYXMtZGVmYXVsdCc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tbmFtZWQtYXMtZGVmYXVsdCcpLFxuICAnbm8tbmFtZWQtYXMtZGVmYXVsdC1tZW1iZXInOiByZXF1aXJlKCcuL3J1bGVzL25vLW5hbWVkLWFzLWRlZmF1bHQtbWVtYmVyJyksXG5cbiAgJ25vLWNvbW1vbmpzJzogcmVxdWlyZSgnLi9ydWxlcy9uby1jb21tb25qcycpLFxuICAnbm8tYW1kJzogcmVxdWlyZSgnLi9ydWxlcy9uby1hbWQnKSxcbiAgJ25vLWR1cGxpY2F0ZXMnOiByZXF1aXJlKCcuL3J1bGVzL25vLWR1cGxpY2F0ZXMnKSxcbiAgJ2ltcG9ydHMtZmlyc3QnOiByZXF1aXJlKCcuL3J1bGVzL2ltcG9ydHMtZmlyc3QnKSxcbiAgJ21heC1kZXBlbmRlbmNpZXMnOiByZXF1aXJlKCcuL3J1bGVzL21heC1kZXBlbmRlbmNpZXMnKSxcbiAgJ25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzJzogcmVxdWlyZSgnLi9ydWxlcy9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcycpLFxuICAnbm8tYWJzb2x1dGUtcGF0aCc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tYWJzb2x1dGUtcGF0aCcpLFxuICAnbm8tbm9kZWpzLW1vZHVsZXMnOiByZXF1aXJlKCcuL3J1bGVzL25vLW5vZGVqcy1tb2R1bGVzJyksXG4gICdvcmRlcic6IHJlcXVpcmUoJy4vcnVsZXMvb3JkZXInKSxcbiAgJ25ld2xpbmUtYWZ0ZXItaW1wb3J0JzogcmVxdWlyZSgnLi9ydWxlcy9uZXdsaW5lLWFmdGVyLWltcG9ydCcpLFxuICAncHJlZmVyLWRlZmF1bHQtZXhwb3J0JzogcmVxdWlyZSgnLi9ydWxlcy9wcmVmZXItZGVmYXVsdC1leHBvcnQnKSxcblxuICAvLyBtZXRhZGF0YS1iYXNlZFxuICAnbm8tZGVwcmVjYXRlZCc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tZGVwcmVjYXRlZCcpLFxufVxuXG5leHBvcnQgY29uc3QgY29uZmlncyA9IHtcbiAgJ2Vycm9ycyc6IHJlcXVpcmUoJy4uL2NvbmZpZy9lcnJvcnMnKSxcbiAgJ3dhcm5pbmdzJzogcmVxdWlyZSgnLi4vY29uZmlnL3dhcm5pbmdzJyksXG5cbiAgLy8gc2hoaGguLi4gd29yayBpbiBwcm9ncmVzcyBcInNlY3JldFwiIHJ1bGVzXG4gICdzdGFnZS0wJzogcmVxdWlyZSgnLi4vY29uZmlnL3N0YWdlLTAnKSxcblxuICAvLyB1c2VmdWwgc3R1ZmYgZm9yIGZvbGtzIHVzaW5nIHZhcmlvdXMgZW52aXJvbm1lbnRzXG4gICdyZWFjdCc6IHJlcXVpcmUoJy4uL2NvbmZpZy9yZWFjdCcpLFxuICAncmVhY3QtbmF0aXZlJzogcmVxdWlyZSgnLi4vY29uZmlnL3JlYWN0LW5hdGl2ZScpLFxuICAnZWxlY3Ryb24nOiByZXF1aXJlKCcuLi9jb25maWcvZWxlY3Ryb24nKSxcbn1cbiJdfQ==