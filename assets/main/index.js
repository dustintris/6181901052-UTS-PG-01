System.register("chunks:///_virtual/Background-001.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "fc8a7O0lRxHeLKGBeiPyErs", "Background-001", undefined);

      var ccclass = _decorator.ccclass;
      var Background = exports('Background', (_dec = ccclass('Background'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Background, _Component);

        function Background() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.currentSpeed = 30; // Initial speed

          _this.movingRight = true;
          return _this;
        }

        var _proto = Background.prototype;

        _proto.update = function update(deltaTime) {
          var position = this.node.getPosition(); // Move diagonally to the right

          if (this.movingRight) {
            position.x += this.currentSpeed * deltaTime * 0.1;
            position.y += this.currentSpeed * deltaTime * 0.1;
            this.node.setPosition(position); // Check if reached edge, then switch direction

            if (position.x >= 10) {
              this.movingRight = false;
            }
          } // Move diagonally to the left
          else {
              position.x -= this.currentSpeed * deltaTime * 0.1;
              position.y -= this.currentSpeed * deltaTime * 0.1;
              this.node.setPosition(position); // Check if reached edge, then switch direction

              if (position.x <= -10) {
                this.movingRight = true;
              }
            }
        };

        return Background;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Background.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "a62ebAbXCZMfpAQhEKlyMuQ", "Background", undefined);

      var ccclass = _decorator.ccclass;
      var Background = exports('Background', (_dec = ccclass('Background'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Background, _Component);

        function Background() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.currentTime = 0;
          _this.currentSpeed = 250;
          return _this;
        }

        var _proto = Background.prototype; // Initial speed

        _proto.start = function start() {
          this.schedule(this.updateTime, 1);
        };

        _proto.updateTime = function updateTime() {
          this.currentTime += 1;
        };

        _proto.update = function update(deltaTime) {
          var position = this.node.getPosition();
          position.x -= this.currentSpeed * deltaTime * 0.1;

          if (position.x <= -288) {
            position.x += 288;
          }

          this.node.setPosition(position);
        };

        return Background;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Bird.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Collider2D, Contact2DType, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "28bb377QT1HMZ5pp7+FJlnB", "Bird", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BirdCollider = exports('BirdCollider', (_dec = ccclass('Bird'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BirdCollider, _Component);

        function BirdCollider() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = BirdCollider.prototype;

        _proto.start = function start() {
          var position = this.node.getPosition();
          position.x = -10;
          this.node.setPosition(position);
          this.node.getComponent(Collider2D).on(Contact2DType.BEGIN_CONTACT, this.onCollide, this);
        };

        _proto.onCollide = function onCollide() {};

        return BirdCollider;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BirdMovement.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, input, Input, Vec3, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      input = module.input;
      Input = module.Input;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "94295GNAK1L7reFOnejfyq4", "BirdMovement", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BirdMovement = exports('BirdMovement', (_dec = ccclass('BirdMovement'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BirdMovement, _Component);

        function BirdMovement() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "buttonLeft", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "buttonRight", _descriptor2, _assertThisInitialized(_this));

          _this.minX = -120; // Minimum X position

          _this.maxX = 120;
          return _this;
        }

        var _proto = BirdMovement.prototype; // Maximum X position

        _proto.onLoad = function onLoad() {
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.buttonLeft.on(Node.EventType.TOUCH_START, this.GoLeftStart, this);
          this.buttonLeft.on(Node.EventType.TOUCH_END, this.GoLeftEnd, this);
          this.buttonRight.on(Node.EventType.TOUCH_START, this.GoRightStart, this);
          this.buttonRight.on(Node.EventType.TOUCH_END, this.GoRightEnd, this);
        };

        _proto.onTouchMove = function onTouchMove(event) {
          var deltaX = event.getLocation().x - 150; // Clamp newX within the specified range
          // deltaX = Math.max(this.minX, Math.min(this.maxX, deltaX));

          this.node.setPosition(new Vec3(deltaX, this.node.getPosition().y, 0));
        };

        _proto.GoLeftStart = function GoLeftStart(event) {
          var position = this.node.getPosition();

          if (position.x > this.minX) {
            position.x -= 15;
            this.node.setPosition(position);
          }

          this.buttonLeft.setScale(1.2, 1.2, 1);
        };

        _proto.GoLeftEnd = function GoLeftEnd(event) {
          this.buttonLeft.setScale(1, 1, 1);
        };

        _proto.GoRightStart = function GoRightStart(event) {
          var position = this.node.getPosition();

          if (position.x < this.maxX) {
            position.x += 15;
            this.node.setPosition(position);
          }

          this.buttonRight.setScale(1.2, 1.2, 1);
        };

        _proto.GoRightEnd = function GoRightEnd(event) {
          this.buttonRight.setScale(1, 1, 1);
        };

        return BirdMovement;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttonLeft", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buttonRight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);

        function DebugViewRuntimeControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));

          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }

        var _proto = DebugViewRuntimeControl.prototype;

        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);

          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }

          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
              y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
              height = 20; // new nodes

          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles'; // title

          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;

            var _labelComponent = newLabel.getComponent(Label);

            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }

          y -= height; // single

          var currentRow = 0;

          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }

            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }

          x += width; // buttons

          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent; // misc

          y -= 40;

          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);

            _newNode.setPosition(x, y - height * _i2, 0.0);

            _newNode.setScale(0.5, 0.5, 0.5);

            _newNode.parent = miscNode;

            var _textComponent = _newNode.getComponentInChildren(RichText);

            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;

            var toggleComponent = _newNode.getComponent(Toggle);

            toggleComponent.isChecked = _i2 ? true : false;

            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);

            this.miscModeToggleList[_i2] = _newNode;
          } // composite


          y -= 150;

          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;

            _newNode2.setPosition(x, y - height * _i3, 0.0);

            _newNode2.setScale(0.5, 0.5, 0.5);

            _newNode2.parent = this.compositeModeToggle.parent;

            var _textComponent2 = _newNode2.getComponentInChildren(RichText);

            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;

            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);

            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };

        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');

          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };

        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };

        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };

        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };

        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };

        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);

          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);

            _toggleComponent.isChecked = true;
          }

          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };

        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };

        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;

          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }

          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }

          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };

        _proto.onLoad = function onLoad() {};

        _proto.update = function update(deltaTime) {};

        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameLogic.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, Label, AudioSource, Collider2D, Contact2DType, instantiate, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      Label = module.Label;
      AudioSource = module.AudioSource;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      instantiate = module.instantiate;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;

      cclegacy._RF.push({}, "ea747Ix1GhDXZxOaqnH5pLw", "GameLogic", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Pipa = exports('Pipa', (_dec = ccclass('Game Logic'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Label
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: AudioSource
      }), _dec11 = property({
        type: AudioSource
      }), _dec12 = property({
        type: AudioSource
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Pipa, _Component);

        function Pipa() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "prefabPipa", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ScoringLine", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodeBird", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameOverSprite", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameStartSprite", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tryAgainSprite", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "scoreLabel", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bloop", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "hit", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "die", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "success", _descriptor11, _assertThisInitialized(_this));

          _this.pos1 = false;
          _this.pos2 = false;
          _this.pos3 = false;
          _this.pos4 = false;
          _this.gameover = false;
          _this.gameStart = false;
          _this.gameRestart = false;
          _this.pipaNodes = [];
          _this.currentTime = 0;
          _this.currentSpeed = 200; // Initial speed

          _this.temp = 3;
          _this.gravity = 0.2;
          _this.deadJump = 10;
          _this.size = 0;
          _this.score = 0;
          return _this;
        }

        var _proto = Pipa.prototype;

        _proto.start = function start() {
          this.schedule(this.updateTime, 1);
          this.nodeBird.getComponent(Collider2D).on(Contact2DType.BEGIN_CONTACT, this.onCollide, this);
          this.gameStartSprite.on(Node.EventType.TOUCH_END, this.gameStartPressed, this);
          this.tryAgainSprite.on(Node.EventType.TOUCH_START, this.restartStart, this);
          this.tryAgainSprite.on(Node.EventType.TOUCH_END, this.restart, this); // Instantiate the prefab three times

          for (var i = 0; i < 3; i++) {
            var pipaNode = instantiate(this.prefabPipa);
            var pipaPosition = pipaNode.getPosition();
            pipaNode.setPosition(pipaPosition);
            pipaNode.setParent(this.node.parent);
            pipaNode.setSiblingIndex(-3);
            this.pipaNodes.push(pipaNode);
          }

          var gameoverPosition = this.gameOverSprite.getPosition();
          gameoverPosition.y = -190;
          this.gameOverSprite.setPosition(gameoverPosition);
          this.bloop.active = false;
        };

        _proto.updateTime = function updateTime() {
          this.currentSpeed += 1;
        };

        _proto.update = function update(deltaTime) {
          var _this2 = this;

          if (this.temp === 0) {
            this.currentSpeed = (this.currentSpeed - 15) * 2;
            this.temp = -5;
          }

          console.log(this.currentTime);
          console.log(this.currentSpeed); //Game Logic
          //Check if the game is started (start when screen get pressed!)

          if (this.gameStart) {
            this.gameStartSprite.active = false; //When gameover

            if (this.gameover) {
              //pipe keep moving down so it wont generates more
              this.pipaNodes.forEach(function (pipaNode) {
                var pipaPosition = pipaNode.getPosition();
                pipaPosition.y -= _this2.currentSpeed * deltaTime;
                pipaNode.setPosition(pipaPosition);

                var birdPosition = _this2.nodeBird.getPosition();

                _this2.deadJump -= _this2.gravity;
                birdPosition.y += _this2.deadJump;
                birdPosition.x -= 1;

                _this2.nodeBird.setPosition(birdPosition);

                _this2.nodeBird.angle += 10;
              }); //moving the game over sign to up

              var gameoverPosition = this.gameOverSprite.getPosition();
              if (gameoverPosition.y > 50) ;else {
                gameoverPosition.y += 5;
                this.gameOverSprite.setPosition(gameoverPosition);

                if (gameoverPosition.y == 0) {
                  this.die.play();
                }
              }
            } else {
              // Update positions of all pipaNodes
              this.pipaNodes.forEach(function (pipaNode) {
                var pipaPosition = pipaNode.getPosition();

                if (pipaPosition.y > -100) {
                  pipaPosition.y -= 0.5;
                  pipaNode.setPosition(pipaPosition);
                } else {
                  pipaPosition.y -= _this2.currentSpeed * deltaTime;

                  if (pipaPosition.y <= -550) {
                    pipaPosition.y = 0;
                    pipaPosition.x = _this2.getRandomXPosition(); // Set random X position

                    pipaNode.setPosition(pipaPosition);
                  } else {
                    pipaNode.setPosition(pipaPosition);
                  }
                }
              });
              var scorePosition = this.ScoringLine.getPosition();

              if (scorePosition.y > -100) {
                scorePosition.y -= 0.5;
                this.ScoringLine.setPosition(scorePosition);
              } else {
                scorePosition.y -= this.currentSpeed * deltaTime;

                if (scorePosition.y <= -550) {
                  scorePosition.y = 0;
                  this.ScoringLine.setPosition(scorePosition);
                  this.incrementScore();
                } else {
                  this.ScoringLine.setPosition(scorePosition);
                }
              }

              this.scoreLabel.string = "" + this.score;
            }
          }

          if (this.gameRestart) {
            this.size += 1;
            this.bloop.setPosition(0, 0);

            if (this.size < 40) {
              this.bloop.setScale(this.size, this.size, 1);
              this.bloop.angle += 10;
            } else {
              director.loadScene('Home');
            }
          }
        };

        _proto.getRandomXPosition = function getRandomXPosition() {
          var positions = [-210, -140, -70, 0];
          var index = Math.floor(Math.random() * positions.length); // Check if the position has been used before

          while (positions[index] === -210 && this.pos1 || positions[index] === -140 && this.pos2 || positions[index] === -70 && this.pos3 || positions[index] === 0 && this.pos4) {
            index = Math.floor(Math.random() * positions.length);
          } // Mark the position as used


          switch (positions[index]) {
            case -210:
              this.pos1 = true;
              break;

            case -140:
              this.pos2 = true;
              break;

            case -70:
              this.pos3 = true;
              break;

            case 0:
              this.pos4 = true;
              break;
          } // Reset all positions if all have been used


          if (this.pos1 && this.pos2 && this.pos3 && this.pos4) {
            this.pos1 = false;
            this.pos2 = false;
            this.pos3 = false;
            this.pos4 = false;
          }

          return positions[index];
        };

        _proto.onCollide = function onCollide() {
          this.gameover = true;
          this.hit.play();
        };

        _proto.gameStartPressed = function gameStartPressed() {
          this.gameStart = true;
        };

        _proto.restartStart = function restartStart() {
          this.tryAgainSprite.setScale(1.2, 1.2, 1);
          this.bloop.active = true;
          this.bloop.setScale(1, 1, 0);
        };

        _proto.restart = function restart() {
          this.gameRestart = true;
        };

        _proto.incrementScore = function incrementScore() {
          this.success.play();
          this.score++;
        };

        return Pipa;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabPipa", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ScoringLine", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeBird", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameOverSprite", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gameStartSprite", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "tryAgainSprite", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bloop", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "hit", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "die", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "success", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './Background-001.ts', './Background.ts', './Bird.ts', './BirdMovement.ts', './GameLogic.ts', './Screenshot.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Screenshot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Button, Node, Component, Texture2D, SpriteFrame, Vec3, find, Camera, RenderTexture, game, director;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      Component = module.Component;
      Texture2D = module.Texture2D;
      SpriteFrame = module.SpriteFrame;
      Vec3 = module.Vec3;
      find = module.find;
      Camera = module.Camera;
      RenderTexture = module.RenderTexture;
      game = module.game;
      director = module.director;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "6cdd59YgIdIhIuzxeLNqs5p", "Screenshot", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Screenshot = exports('Screenshot', (_dec = ccclass('Screenshot'), _dec2 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Screenshot, _Component);

        function Screenshot() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "captureButton", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Screenshot.prototype;

        _proto.start = function start() {
          this.captureButton.node.on(Node.EventType.TOUCH_END, this.onCaptureButtonClick, this);
        };

        _proto.onCaptureButtonClick = /*#__PURE__*/function () {
          var _onCaptureButtonClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var mainCamera, renderTexture, texture, spriteFrame, screenshotNode, sprite;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  // Ambil referensi ke kamera utama
                  mainCamera = find("Main Camera").getComponent(Camera); // Buat RenderTexture untuk menampung tangkapan layar

                  renderTexture = new RenderTexture();
                  renderTexture.createNode({
                    wid: game.canvas.width,
                    height: game.canvas.height,
                    colorFormat: RenderTexture.PixelFormat.RGBA8888,
                    // Sesuaikan dengan format yang Anda butuhkan
                    depthStencilFormat: RenderTexture.DepthStencilFormat.DEPTH_24_STENCIL_8 // Sesuaikan dengan format yang Anda butuhkan

                  }); // Ganti target framebuffer kamera utama dengan renderTexture

                  mainCamera.targetTexture = renderTexture; // Render scene ke renderTexture

                  _context.next = 6;
                  return director.render();

                case 6:
                  // Kembalikan target framebuffer kamera utama ke null
                  mainCamera.targetTexture = null; // Buat Texture2D dari renderTexture

                  texture = new Texture2D();
                  texture.image = renderTexture; // Buat SpriteFrame dari Texture2D

                  spriteFrame = new SpriteFrame();
                  spriteFrame.texture = texture; // Buat node baru dengan Sprite untuk menampilkan tangkapan layar

                  screenshotNode = new Node();
                  sprite = screenshotNode.addComponent(SpriteFrame);
                  sprite.spriteFrame = spriteFrame;
                  screenshotNode.setParent(this.node); // Optional: Atur posisi atau tindakan node screenshotNode sesuai kebutuhan

                  screenshotNode.position = new Vec3(0, 0, 0); // Simpan tangkapan layar ke file jika diperlukan

                  this.saveScreenshotToFile(texture);

                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function onCaptureButtonClick() {
            return _onCaptureButtonClick.apply(this, arguments);
          }

          return onCaptureButtonClick;
        }();

        _proto.saveScreenshotToFile = function saveScreenshotToFile(texture) {
          // Misalnya, simpan tangkapan layar ke file (tidak disertakan di sini, Anda dapat menggunakan modul fs atau menyimpannya ke server)
          console.log('Screenshot saved!');
        };

        return Screenshot;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "captureButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});