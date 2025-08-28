System.register("chunks:///_virtual/AchievementConfig.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "cbb25It15NPvZ/2D0ogqP26", "AchievementConfig", undefined);
      var ccclass = _decorator.ccclass;

      /**
       * 成就类型枚举
       */
      var AchievementType = exports('AchievementType', /*#__PURE__*/function (AchievementType) {
        AchievementType["AFFECTION"] = "affection";
        AchievementType["STORY"] = "story";
        AchievementType["COLLECTION"] = "collection";
        return AchievementType;
      }({}));

      /**
       * 成就数据接口
       */

      var AchievementConfig = exports('AchievementConfig', (_dec = ccclass('AchievementConfig'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function AchievementConfig() {}
        /**
         * 获取成就配置数据
         */
        AchievementConfig.getAchievementData = function getAchievementData() {
          var savedData = this.loadFromStorage();
          if (savedData && savedData.length > 0) {
            return savedData;
          }
          return JSON.parse(JSON.stringify(this.DEFAULT_ACHIEVEMENTS));
        }

        /**
         * 保存成就数据到本地存储
         */;
        AchievementConfig.saveToStorage = function saveToStorage(achievements) {
          try {
            var dataString = JSON.stringify(achievements);
            localStorage.setItem('achievement_data', dataString);
            console.log('[AchievementConfig] 成就数据已保存到本地存储');
          } catch (error) {
            console.error('[AchievementConfig] 保存成就数据失败:', error);
          }
        }

        /**
         * 从本地存储加载成就数据
         */;
        AchievementConfig.loadFromStorage = function loadFromStorage() {
          try {
            var dataString = localStorage.getItem('achievement_data');
            if (dataString) {
              var achievements = JSON.parse(dataString);
              console.log('[AchievementConfig] 从本地存储加载成就数据成功');
              return achievements;
            }
          } catch (error) {
            console.error('[AchievementConfig] 加载成就数据失败:', error);
          }
          return null;
        }

        /**
         * 重置所有成就数据
         */;
        AchievementConfig.resetAllAchievements = function resetAllAchievements() {
          var resetData = JSON.parse(JSON.stringify(this.DEFAULT_ACHIEVEMENTS));
          this.saveToStorage(resetData);
          console.log('[AchievementConfig] 所有成就数据已重置');
          return resetData;
        }

        /**
         * 根据ID获取成就数据
         */;
        AchievementConfig.getAchievementById = function getAchievementById(id) {
          var achievements = this.getAchievementData();
          for (var i = 0; i < achievements.length; i++) {
            if (achievements[i].id === id) {
              return achievements[i];
            }
          }
          return null;
        }

        /**
         * 根据类型获取成就列表
         */;
        AchievementConfig.getAchievementsByType = function getAchievementsByType(type) {
          var achievements = this.getAchievementData();
          return achievements.filter(function (achievement) {
            return achievement.type === type;
          });
        }

        /**
         * 获取已解锁的成就数量
         */;
        AchievementConfig.getUnlockedCount = function getUnlockedCount() {
          var achievements = this.getAchievementData();
          return achievements.filter(function (achievement) {
            return achievement.isUnlocked;
          }).length;
        }

        /**
         * 获取成就总数
         */;
        AchievementConfig.getTotalCount = function getTotalCount() {
          return this.DEFAULT_ACHIEVEMENTS.length;
        }

        /**
         * 检查成就是否已解锁
         */;
        AchievementConfig.isAchievementUnlocked = function isAchievementUnlocked(id) {
          var achievement = this.getAchievementById(id);
          return achievement ? achievement.isUnlocked : false;
        };
        return AchievementConfig;
      }(), _class2.DEFAULT_ACHIEVEMENTS = [{
        id: 'affection_yaxin_max',
        name: '知性恋人',
        description: '与林雅欣的好感度达到满值，在知识的海洋中找到真爱',
        type: AchievementType.AFFECTION,
        isUnlocked: false,
        unlockCondition: {
          target: 'yaxin_affection',
          value: 100,
          current: 0
        },
        reward: {
          type: 'title',
          value: 1
        }
      }, {
        id: 'affection_xiaomeng_max',
        name: '艺术伴侣',
        description: '与王小萌的好感度达到满值，用创意点亮彼此的人生',
        type: AchievementType.AFFECTION,
        isUnlocked: false,
        unlockCondition: {
          target: 'xiaomeng_affection',
          value: 100,
          current: 0
        },
        reward: {
          type: 'title',
          value: 2
        }
      }, {
        id: 'affection_jingyi_max',
        name: '心灵伴侣',
        description: '与陈静怡的好感度达到满值，在书香中找到心灵归宿',
        type: AchievementType.AFFECTION,
        isUnlocked: false,
        unlockCondition: {
          target: 'jingyi_affection',
          value: 100,
          current: 0
        },
        reward: {
          type: 'title',
          value: 3
        }
      }], _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AchievementData.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sys = module.sys;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "9fcc5q5TFpE3JFGGZC7fnvc", "AchievementData", undefined);
      var ccclass = _decorator.ccclass;

      /**
       * 成就类型枚举
       */
      var AchievementType = exports('AchievementType', /*#__PURE__*/function (AchievementType) {
        AchievementType["AFFECTION"] = "affection";
        AchievementType["STORY"] = "story";
        AchievementType["CHOICE"] = "choice";
        AchievementType["SPECIAL"] = "special";
        return AchievementType;
      }({}));

      /**
       * 女主角枚举
       */
      var Heroine = exports('Heroine', /*#__PURE__*/function (Heroine) {
        Heroine["LIN_YAXIN"] = "lin_yaxin";
        Heroine["WANG_XIAOMENG"] = "wang_xiaomeng";
        Heroine["CHEN_JINGYI"] = "chen_jingyi";
        return Heroine;
      }({}));

      /**
       * 成就定义接口
       */

      /**
       * 成就进度数据
       */

      /**
       * 成就数据管理类
       */
      var AchievementData = exports('AchievementData', (_dec = ccclass('AchievementData'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function AchievementData() {
          this.STORAGE_KEY = 'game_achievements';
          // 成就定义列表
          this.achievementDefinitions = {};
          // 成就进度数据
          this.achievementProgress = {};
          this.initializeAchievements();
          this.loadProgress();
        }
        AchievementData.getInstance = function getInstance() {
          if (!AchievementData.instance) {
            AchievementData.instance = new AchievementData();
          }
          return AchievementData.instance;
        }

        /**
         * 初始化成就定义
         * 与AchievementConfig.ts保持一致，只有3个好感度成就（满值解锁）
         */;
        var _proto = AchievementData.prototype;
        _proto.initializeAchievements = function initializeAchievements() {
          // 林雅欣好感度满值成就
          this.addAchievement({
            id: 'affection_yaxin_max',
            name: '知性恋人',
            description: '与林雅欣的好感度达到满值，在知识的海洋中找到真爱',
            type: AchievementType.AFFECTION,
            heroine: Heroine.LIN_YAXIN,
            requiredValue: 100
          });

          // 王小萌好感度满值成就
          this.addAchievement({
            id: 'affection_xiaomeng_max',
            name: '艺术伴侣',
            description: '与王小萌的好感度达到满值，用创意点亮彼此的人生',
            type: AchievementType.AFFECTION,
            heroine: Heroine.WANG_XIAOMENG,
            requiredValue: 100
          });

          // 陈静怡好感度满值成就
          this.addAchievement({
            id: 'affection_jingyi_max',
            name: '心灵伴侣',
            description: '与陈静怡的好感度达到满值，在书香中找到心灵归宿',
            type: AchievementType.AFFECTION,
            heroine: Heroine.CHEN_JINGYI,
            requiredValue: 100
          });
          console.log('🏆 [AchievementData] 成就定义初始化完成，共', Object.keys(this.achievementDefinitions).length, '个成就');
        }

        /**
         * 添加成就定义
         */;
        _proto.addAchievement = function addAchievement(definition) {
          this.achievementDefinitions[definition.id] = definition;

          // 如果还没有进度记录，创建一个
          if (!this.achievementProgress[definition.id]) {
            this.achievementProgress[definition.id] = {
              id: definition.id,
              isUnlocked: false,
              currentProgress: 0
            };
          }
        }

        /**
         * 获取成就定义
         */;
        _proto.getAchievementDefinition = function getAchievementDefinition(id) {
          return this.achievementDefinitions[id] || null;
        }

        /**
         * 获取成就进度
         */;
        _proto.getAchievementProgress = function getAchievementProgress(id) {
          return this.achievementProgress[id] || null;
        }

        /**
         * 获取所有成就定义
         */;
        _proto.getAllAchievementDefinitions = function getAllAchievementDefinitions() {
          var results = [];
          for (var _key in this.achievementDefinitions) {
            results.push(this.achievementDefinitions[_key]);
          }
          return results;
        }

        /**
         * 获取所有成就进度
         */;
        _proto.getAllAchievementProgress = function getAllAchievementProgress() {
          var results = [];
          for (var _key2 in this.achievementProgress) {
            results.push(this.achievementProgress[_key2]);
          }
          return results;
        }

        /**
         * 解锁成就
         */;
        _proto.unlockAchievement = function unlockAchievement(id) {
          var progress = this.achievementProgress[id];
          if (!progress) {
            console.warn("\u274C [AchievementData] \u5C1D\u8BD5\u89E3\u9501\u4E0D\u5B58\u5728\u7684\u6210\u5C31: " + id);
            return false;
          }
          if (progress.isUnlocked) {
            return false; // 已经解锁过了
          }

          progress.isUnlocked = true;
          progress.unlockedAt = new Date();
          this.saveProgress();
          return true;
        }

        /**
         * 更新成就进度
         */;
        _proto.updateAchievementProgress = function updateAchievementProgress(id, currentProgress) {
          var progress = this.achievementProgress[id];
          if (!progress) {
            console.warn("\u274C [AchievementData] \u5C1D\u8BD5\u66F4\u65B0\u4E0D\u5B58\u5728\u7684\u6210\u5C31\u8FDB\u5EA6: " + id);
            return;
          }
          progress.currentProgress = currentProgress;
          this.saveProgress();
        }

        /**
         * 检查特定女主角的好感度成就
         */;
        _proto.checkAffectionAchievements = function checkAffectionAchievements(heroine, affectionValue, forceShowNotification) {
          if (forceShowNotification === void 0) {
            forceShowNotification = false;
          }
          var unlockedAchievements = [];

          // 查找该女主角的好感度成就
          for (var _key3 in this.achievementDefinitions) {
            var definition = this.achievementDefinitions[_key3];
            if (definition.type === AchievementType.AFFECTION && definition.heroine === heroine && definition.requiredValue !== undefined) {
              var progress = this.achievementProgress[definition.id];
              if (progress && affectionValue >= definition.requiredValue) {
                // 如果是强制显示通知模式，或者成就还未解锁
                if (forceShowNotification || !progress.isUnlocked) {
                  if (forceShowNotification && progress.isUnlocked) {
                    // 已解锁但强制显示通知
                    console.log("\uD83D\uDD14 [\u5F3A\u5236\u901A\u77E5] \u91CD\u65B0\u663E\u793A\u5DF2\u89E3\u9501\u6210\u5C31\u901A\u77E5: " + definition.name);
                    unlockedAchievements.push(definition.id);
                  } else if (this.unlockAchievement(definition.id)) {
                    // 首次解锁
                    unlockedAchievements.push(definition.id);
                  }
                }
              }

              // 更新进度
              this.updateAchievementProgress(definition.id, affectionValue);
            }
          }
          return unlockedAchievements;
        }

        /**
         * 获取已解锁的成就
         */;
        _proto.getUnlockedAchievements = function getUnlockedAchievements() {
          var results = [];
          for (var _key4 in this.achievementProgress) {
            var progress = this.achievementProgress[_key4];
            if (progress.isUnlocked) {
              results.push(progress);
            }
          }
          return results;
        }

        /**
         * 获取成就统计信息
         */;
        _proto.getAchievementStats = function getAchievementStats() {
          var total = 0;
          var unlocked = 0;
          for (var _key5 in this.achievementDefinitions) {
            total++;
          }
          var progressData = [];
          for (var _key6 in this.achievementProgress) {
            progressData.push(this.achievementProgress[_key6]);
          }
          unlocked = progressData.filter(function (p) {
            return p.isUnlocked;
          }).length;
          return {
            total: total,
            unlocked: unlocked,
            percentage: total > 0 ? Math.round(unlocked / total * 100) : 0
          };
        }

        /**
         * 保存成就进度到本地存储
         */;
        _proto.saveProgress = function saveProgress() {
          try {
            var progressData = [];
            for (var _key7 in this.achievementProgress) {
              progressData.push(this.achievementProgress[_key7]);
            }
            var dataToSave = JSON.stringify(progressData);
            sys.localStorage.setItem(this.STORAGE_KEY, dataToSave);
            console.log("\uD83D\uDCBE [AchievementData] \u6210\u5C31\u8FDB\u5EA6\u5DF2\u4FDD\u5B58 (" + progressData.length + "\u4E2A\u6210\u5C31)");
          } catch (error) {
            console.error('❌ [AchievementData] 保存成就进度失败:', error);
          }
        }

        /**
         * 从本地存储加载成就进度
         */;
        _proto.loadProgress = function loadProgress() {
          try {
            var savedData = sys.localStorage.getItem(this.STORAGE_KEY);
            if (!savedData) {
              console.log('ℹ️ [AchievementData] 未找到已保存的成就进度，使用默认值');
              return;
            }
            var progressList = JSON.parse(savedData);
            for (var i = 0; i < progressList.length; i++) {
              var progress = progressList[i];
              // 确保数据结构完整
              if (progress.id && typeof progress.isUnlocked === 'boolean') {
                // 如果存在解锁时间，恢复Date对象
                if (progress.unlockedAt && typeof progress.unlockedAt === 'string') {
                  progress.unlockedAt = new Date(progress.unlockedAt);
                }
                this.achievementProgress[progress.id] = progress;
              }
            }
            console.log("\uD83D\uDCC1 [AchievementData] \u6210\u5C31\u8FDB\u5EA6\u5DF2\u52A0\u8F7D (" + progressList.length + "\u4E2A\u6210\u5C31)");
          } catch (error) {
            console.error('❌ [AchievementData] 加载成就进度失败:', error);
          }
        }

        /**
         * 重置所有成就进度（调试用）
         */;
        _proto.resetAllProgress = function resetAllProgress() {
          console.log('🔄 [AchievementData] 重置所有成就进度');
          for (var _key8 in this.achievementProgress) {
            var progress = this.achievementProgress[_key8];
            progress.isUnlocked = false;
            progress.currentProgress = 0;
            progress.unlockedAt = undefined;
          }
          this.saveProgress();
        }

        /**
         * 完全清除所有成就数据（彻底重置）
         */;
        _proto.completelyResetAllData = function completelyResetAllData() {
          console.log('🗑️ [AchievementData] 完全清除所有成就数据...');
          try {
            // 1. 清空内存中的成就进度
            this.achievementProgress = {};

            // 2. 删除start场景的存储数据
            localStorage.removeItem('achievement_data');
            console.log('✅ [AchievementData] 已删除start场景数据 (achievement_data)');

            // 3. 删除game场景的存储数据
            sys.localStorage.removeItem(this.STORAGE_KEY);
            console.log('✅ [AchievementData] 已删除game场景数据 (game_achievements)');

            // 4. 重新初始化默认成就进度
            this.initializeAchievements();
            console.log('🎉 [AchievementData] 成就数据已完全清除并重新初始化');
            console.log('💡 [提示] 现在可以重新解锁成就并正常显示通知');
          } catch (error) {
            console.error('❌ [AchievementData] 完全重置失败:', error);
          }
        };
        return AchievementData;
      }(), _class2.instance = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AchievementItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, SpriteFrame, color, UIOpacity, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      color = module.color;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "a55babEU1NMl6LdZN5AFv8W", "AchievementItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AchievementItem = exports('AchievementItem', (_dec = ccclass('AchievementItem'), _dec2 = property({
        type: Label,
        tooltip: '成就名称文本节点'
      }), _dec3 = property({
        type: Label,
        tooltip: '成就描述文本节点'
      }), _dec4 = property({
        type: Sprite,
        tooltip: '锁头图片节点'
      }), _dec5 = property({
        type: SpriteFrame,
        tooltip: '解锁状态的锁头图片'
      }), _dec6 = property({
        type: SpriteFrame,
        tooltip: '锁定状态的锁头图片'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AchievementItem, _Component);
        function AchievementItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "nameLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "descriptionLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lockIcon", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "unlockedLockSprite", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lockedLockSprite", _descriptor5, _assertThisInitialized(_this));
          _this.achievementData = null;
          // 颜色配置
          _this.UNLOCKED_NAME_COLOR = color(0, 0, 0, 255);
          // 黑色
          _this.UNLOCKED_DESC_COLOR = color(0, 0, 0, 255);
          // 黑色
          _this.LOCKED_NAME_COLOR = color(128, 128, 128, 255);
          // 灰色
          _this.LOCKED_DESC_COLOR = color(128, 128, 128, 255);
          return _this;
        }
        var _proto = AchievementItem.prototype;
        // 灰色
        _proto.onLoad = function onLoad() {
          this.initializeComponents();
        }

        /**
         * 初始化组件
         */;
        _proto.initializeComponents = function initializeComponents() {
          // 确保组件存在
          if (!this.nameLabel) {
            console.warn('[AchievementItem] nameLabel 未设置');
          }
          if (!this.descriptionLabel) {
            console.warn('[AchievementItem] descriptionLabel 未设置');
          }
          if (!this.lockIcon) {
            console.warn('[AchievementItem] lockIcon 未设置');
          }
          if (!this.unlockedLockSprite) {
            console.warn('[AchievementItem] unlockedLockSprite 未设置');
          }
          if (!this.lockedLockSprite) {
            console.warn('[AchievementItem] lockedLockSprite 未设置');
          }
        }

        /**
         * 设置成就数据
         */;
        _proto.setupAchievement = function setupAchievement(data) {
          this.achievementData = data;
          this.updateDisplay();
        }

        /**
         * 更新显示内容
         */;
        _proto.updateDisplay = function updateDisplay() {
          if (!this.achievementData) {
            console.warn('[AchievementItem] 成就数据为空');
            return;
          }
          this.updateNameDisplay();
          this.updateDescriptionDisplay();
          this.updateLockIcon();
          this.updateVisualState();
        }

        /**
         * 更新名称显示
         */;
        _proto.updateNameDisplay = function updateNameDisplay() {
          if (this.nameLabel) {
            if (this.achievementData.isUnlocked) {
              this.nameLabel.string = "\uD83C\uDFC6 " + this.achievementData.name;
              this.nameLabel.color = this.UNLOCKED_NAME_COLOR;
            } else {
              this.nameLabel.string = "\uD83D\uDD12 " + this.achievementData.name;
              this.nameLabel.color = this.LOCKED_NAME_COLOR;
            }
          }
        }

        /**
         * 更新描述显示
         */;
        _proto.updateDescriptionDisplay = function updateDescriptionDisplay() {
          if (this.descriptionLabel) {
            if (this.achievementData.isUnlocked) {
              // 已解锁：显示完整描述和解锁时间
              var unlockDate = this.achievementData.unlockTime ? new Date(this.achievementData.unlockTime).toLocaleDateString() : '未知时间';
              this.descriptionLabel.string = this.achievementData.description + "\n\u89E3\u9501\u65F6\u95F4: " + unlockDate;
              this.descriptionLabel.color = this.UNLOCKED_DESC_COLOR;
            } else {
              // 未解锁：显示进度信息
              var condition = this.achievementData.unlockCondition;
              var progress = "\u8FDB\u5EA6: " + condition.current + "/" + condition.value;
              this.descriptionLabel.string = this.achievementData.description + "\n" + progress;
              this.descriptionLabel.color = this.LOCKED_DESC_COLOR;
            }
          }
        }

        /**
         * 更新锁头图片
         */;
        _proto.updateLockIcon = function updateLockIcon() {
          if (this.lockIcon) {
            if (this.achievementData.isUnlocked) {
              // 已解锁：显示开锁的锁头
              if (this.unlockedLockSprite) {
                this.lockIcon.spriteFrame = this.unlockedLockSprite;
              }
            } else {
              // 未解锁：显示锁定的锁头
              if (this.lockedLockSprite) {
                this.lockIcon.spriteFrame = this.lockedLockSprite;
              }
            }
          }
        }

        /**
         * 更新视觉状态
         */;
        _proto.updateVisualState = function updateVisualState() {
          // 可以在这里添加更多的视觉效果，比如背景颜色变化、特效等
          var nodeOpacity = this.achievementData.isUnlocked ? 255 : 180;
          var uiOpacity = this.node.getComponent(UIOpacity);
          if (uiOpacity) {
            uiOpacity.opacity = nodeOpacity;
          }
        }

        /**
         * 获取成就数据
         */;
        _proto.getAchievementData = function getAchievementData() {
          return this.achievementData;
        }

        /**
         * 检查是否已解锁
         */;
        _proto.isUnlocked = function isUnlocked() {
          return this.achievementData ? this.achievementData.isUnlocked : false;
        }

        /**
         * 获取解锁进度百分比
         */;
        _proto.getProgressPercentage = function getProgressPercentage() {
          if (!this.achievementData) return 0;
          var condition = this.achievementData.unlockCondition;
          if (condition.value === 0) return 0;
          return Math.min(100, Math.round(condition.current / condition.value * 100));
        }

        /**
         * 设置自定义颜色
         */;
        _proto.setCustomColors = function setCustomColors(unlockedNameColor, unlockedDescColor, lockedNameColor, lockedDescColor) {
          if (unlockedNameColor) {
            var _this$achievementData;
            this.nameLabel.color = (_this$achievementData = this.achievementData) != null && _this$achievementData.isUnlocked ? unlockedNameColor : this.nameLabel.color;
          }
          if (unlockedDescColor) {
            var _this$achievementData2;
            this.descriptionLabel.color = (_this$achievementData2 = this.achievementData) != null && _this$achievementData2.isUnlocked ? unlockedDescColor : this.descriptionLabel.color;
          }
          if (lockedNameColor) {
            var _this$achievementData3;
            this.nameLabel.color = !((_this$achievementData3 = this.achievementData) != null && _this$achievementData3.isUnlocked) ? lockedNameColor : this.nameLabel.color;
          }
          if (lockedDescColor) {
            var _this$achievementData4;
            this.descriptionLabel.color = !((_this$achievementData4 = this.achievementData) != null && _this$achievementData4.isUnlocked) ? lockedDescColor : this.descriptionLabel.color;
          }
        }

        /**
         * 播放解锁动画（可选实现）
         */;
        _proto.playUnlockAnimation = function playUnlockAnimation() {
          var _this$achievementData5,
            _this2 = this;
          // 这里可以实现成就解锁时的动画效果
          // 比如缩放、闪烁、粒子效果等
          console.log('[AchievementItem] 播放解锁动画:', (_this$achievementData5 = this.achievementData) == null ? void 0 : _this$achievementData5.name);

          // 示例：简单的缩放动画
          if (this.node) {
            this.node.setScale(1.1, 1.1);
            this.scheduleOnce(function () {
              if (_this2.node && _this2.node.isValid) {
                _this2.node.setScale(1.0, 1.0);
              }
            }, 0.2);
          }
        }

        /**
         * 重置显示状态
         */;
        _proto.resetDisplay = function resetDisplay() {
          if (this.nameLabel) {
            this.nameLabel.string = '';
            this.nameLabel.color = this.LOCKED_NAME_COLOR;
          }
          if (this.descriptionLabel) {
            this.descriptionLabel.string = '';
            this.descriptionLabel.color = this.LOCKED_DESC_COLOR;
          }

          // 重置锁头图片为锁定状态
          if (this.lockIcon && this.lockedLockSprite) {
            this.lockIcon.spriteFrame = this.lockedLockSprite;
          }
          var uiOpacity = this.node.getComponent(UIOpacity);
          if (uiOpacity) {
            uiOpacity.opacity = 255;
          }
          this.node.setScale(1.0, 1.0);
        };
        return AchievementItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "descriptionLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lockIcon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "unlockedLockSprite", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lockedLockSprite", [_dec6], {
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

System.register("chunks:///_virtual/AchievementManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AchievementConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _extends, cclegacy, _decorator, Node, Prefab, instantiate, Component, AchievementConfig, AchievementType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      AchievementConfig = module.AchievementConfig;
      AchievementType = module.AchievementType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "ecf2aML0FlG2qYpUeg2Tnjz", "AchievementManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // 定义成就项组件接口

      var AchievementManager = exports('AchievementManager', (_dec = ccclass('AchievementManager'), _dec2 = property({
        type: Node,
        tooltip: '成就面板节点'
      }), _dec3 = property({
        type: Node,
        tooltip: '打开成就面板按钮'
      }), _dec4 = property({
        type: Node,
        tooltip: '关闭成就面板按钮'
      }), _dec5 = property({
        type: Node,
        tooltip: '成就滚动视图的Content节点'
      }), _dec6 = property({
        type: Prefab,
        tooltip: '成就项预制体'
      }), _dec7 = property({
        type: Node,
        tooltip: '解锁全部成就按钮'
      }), _dec8 = property({
        type: Node,
        tooltip: '锁定全部成就按钮'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AchievementManager, _Component);
        function AchievementManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "achievementPanel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openButton", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeButton", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollContent", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "achievementPrefab", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "unlockAllButton", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lockAllButton", _descriptor7, _assertThisInitialized(_this));
          _this.achievements = [];
          _this.achievementNodes = [];
          return _this;
        }
        var _proto = AchievementManager.prototype;
        _proto.onLoad = function onLoad() {
          this.initializeAchievements();
          this.setupEventListeners();
        };
        _proto.start = function start() {
          // 初始化时隐藏面板
          if (this.achievementPanel) {
            this.achievementPanel.active = false;
          }

          // 生成成就项
          this.generateAchievementItems();
        }

        /**
         * 初始化成就数据
         */;
        _proto.initializeAchievements = function initializeAchievements() {
          this.achievements = AchievementConfig.getAchievementData();
          console.log('[AchievementManager] 初始化成就数据，共', this.achievements.length, '个成就');
        }

        /**
         * 设置事件监听器
         */;
        _proto.setupEventListeners = function setupEventListeners() {
          // 打开面板按钮
          if (this.openButton) {
            this.openButton.on(Node.EventType.TOUCH_END, this.openAchievementPanel, this);
          }

          // 关闭面板按钮
          if (this.closeButton) {
            this.closeButton.on(Node.EventType.TOUCH_END, this.closeAchievementPanel, this);
          }

          // 解锁全部成就按钮
          if (this.unlockAllButton) {
            this.unlockAllButton.on(Node.EventType.TOUCH_END, this.unlockAllAchievements, this);
          }

          // 锁定全部成就按钮
          if (this.lockAllButton) {
            this.lockAllButton.on(Node.EventType.TOUCH_END, this.lockAllAchievements, this);
          }
        }

        /**
         * 打开成就面板
         */;
        _proto.openAchievementPanel = function openAchievementPanel() {
          if (this.achievementPanel) {
            this.achievementPanel.active = true;
            console.log('[AchievementManager] 打开成就面板');

            // 刷新成就数据
            this.refreshAchievements();
          }
        }

        /**
         * 关闭成就面板
         */;
        _proto.closeAchievementPanel = function closeAchievementPanel() {
          if (this.achievementPanel) {
            this.achievementPanel.active = false;
            console.log('[AchievementManager] 关闭成就面板');
          }
        }

        /**
         * 生成成就项
         */;
        _proto.generateAchievementItems = function generateAchievementItems() {
          var _this2 = this;
          if (!this.scrollContent || !this.achievementPrefab) {
            console.warn('[AchievementManager] scrollContent 或 achievementPrefab 未设置');
            return;
          }

          // 清除现有的成就项
          this.clearAchievementItems();

          // 为每个成就创建节点
          this.achievements.forEach(function (achievement, index) {
            var achievementNode = instantiate(_this2.achievementPrefab);

            // 获取成就项组件
            var achievementItem = achievementNode.getComponent('AchievementItem');
            if (achievementItem) {
              achievementItem.setupAchievement(achievement);
            }

            // 添加到滚动视图
            _this2.scrollContent.addChild(achievementNode);
            _this2.achievementNodes.push(achievementNode);
          });
          console.log('[AchievementManager] 生成了', this.achievementNodes.length, '个成就项');
        }

        /**
         * 清除成就项
         */;
        _proto.clearAchievementItems = function clearAchievementItems() {
          this.achievementNodes.forEach(function (node) {
            if (node && node.isValid) {
              node.destroy();
            }
          });
          this.achievementNodes = [];
        }

        /**
         * 刷新成就数据
         */;
        _proto.refreshAchievements = function refreshAchievements() {
          var _this3 = this;
          this.achievements = AchievementConfig.getAchievementData();

          // 更新现有的成就项
          this.achievementNodes.forEach(function (node, index) {
            if (node && node.isValid && _this3.achievements[index]) {
              var achievementItem = node.getComponent('AchievementItem');
              if (achievementItem) {
                achievementItem.setupAchievement(_this3.achievements[index]);
              }
            }
          });
        }

        /**
         * 检查好感度成就
         */;
        _proto.checkAffectionAchievements = function checkAffectionAchievements(character, affection) {
          var _this4 = this;
          var achievementUnlocked = false;
          this.achievements.forEach(function (achievement) {
            if (achievement.type === AchievementType.AFFECTION && !achievement.isUnlocked) {
              var target = achievement.unlockCondition.target;

              // 检查是否匹配角色
              if (target.includes(character.toLowerCase())) {
                achievement.unlockCondition.current = affection;

                // 检查是否达到解锁条件
                if (affection >= achievement.unlockCondition.value) {
                  _this4.unlockAchievement(achievement.id);
                  achievementUnlocked = true;
                }
              }
            }
          });

          // 如果有成就解锁，保存数据
          if (achievementUnlocked) {
            AchievementConfig.saveToStorage(this.achievements);
          }
        }

        /**
         * 解锁成就
         */;
        _proto.unlockAchievement = function unlockAchievement(achievementId) {
          var achievement = this.achievements.find(function (a) {
            return a.id === achievementId;
          });
          if (achievement && !achievement.isUnlocked) {
            achievement.isUnlocked = true;
            achievement.unlockTime = Date.now();
            console.log('[AchievementManager] 成就解锁:', achievement.name);

            // 保存到本地存储
            AchievementConfig.saveToStorage(this.achievements);

            // 刷新UI
            this.refreshAchievements();

            // 这里可以添加成就解锁的特效或提示
            this.showAchievementUnlockNotification(achievement);
            return true;
          }
          return false;
        }

        /**
         * 显示成就解锁通知
         */;
        _proto.showAchievementUnlockNotification = function showAchievementUnlockNotification(achievement) {
          // 这里可以实现成就解锁的提示效果
          console.log("\uD83C\uDF89 \u6210\u5C31\u89E3\u9501: " + achievement.name + " - " + achievement.description);

          // 可以在这里添加弹窗、音效等
        }

        /**
         * 获取成就进度信息
         */;
        _proto.getAchievementProgress = function getAchievementProgress() {
          var total = this.achievements.length;
          var unlocked = this.achievements.filter(function (a) {
            return a.isUnlocked;
          }).length;
          var percentage = total > 0 ? Math.round(unlocked / total * 100) : 0;
          return {
            unlocked: unlocked,
            total: total,
            percentage: percentage
          };
        }

        /**
         * 重置所有成就
         */;
        _proto.resetAllAchievements = function resetAllAchievements() {
          this.achievements = AchievementConfig.resetAllAchievements();
          this.refreshAchievements();
          console.log('[AchievementManager] 所有成就已重置');
        }

        /**
         * 获取已解锁的成就列表
         */;
        _proto.getUnlockedAchievements = function getUnlockedAchievements() {
          return this.achievements.filter(function (achievement) {
            return achievement.isUnlocked;
          });
        }

        /**
         * 获取未解锁的成就列表
         */;
        _proto.getLockedAchievements = function getLockedAchievements() {
          return this.achievements.filter(function (achievement) {
            return !achievement.isUnlocked;
          });
        }

        /**
         * 解锁全部成就
         */;
        _proto.unlockAllAchievements = function unlockAllAchievements() {
          var hasChanges = false;
          this.achievements.forEach(function (achievement) {
            if (!achievement.isUnlocked) {
              achievement.isUnlocked = true;
              achievement.unlockTime = Date.now();
              achievement.unlockCondition.current = achievement.unlockCondition.value;
              hasChanges = true;
            }
          });
          if (hasChanges) {
            // 保存数据
            AchievementConfig.saveToStorage(this.achievements);

            // 刷新UI
            this.refreshAchievements();
            console.log('[AchievementManager] 所有成就已解锁');
          }
        }

        /**
         * 锁定全部成就 - 完全删除所有存储数据并重新初始化
         */;
        _proto.lockAllAchievements = function lockAllAchievements() {
          console.log('🔄 [AchievementManager] 开始完全重置所有成就数据...');

          // 1. 删除start场景的成就数据存储
          try {
            localStorage.removeItem('achievement_data');
            console.log('✅ [AchievementManager] 已删除start场景成就数据 (achievement_data)');
          } catch (error) {
            console.error('❌ [AchievementManager] 删除start场景数据失败:', error);
          }

          // 2. 删除game场景的成就数据存储
          try {
            // 直接使用localStorage来清理game场景数据（两个场景都使用相同的localStorage）
            localStorage.removeItem('game_achievements');
            console.log('✅ [AchievementManager] 已删除game场景成就数据 (game_achievements)');
          } catch (error) {
            console.error('❌ [AchievementManager] 删除game场景数据失败:', error);
          }

          // 3. 重置当前成就数据为默认状态
          this.achievements = JSON.parse(JSON.stringify(AchievementConfig.DEFAULT_ACHIEVEMENTS)).map(function (achievement) {
            return _extends({}, achievement, {
              isUnlocked: false,
              unlockTime: undefined,
              unlockCondition: _extends({}, achievement.unlockCondition, {
                current: 0
              })
            });
          });

          // 4. 保存重置后的数据
          AchievementConfig.saveToStorage(this.achievements);

          // 5. 刷新UI显示
          this.refreshAchievements();
          console.log('🎉 [AchievementManager] 所有成就数据已完全重置并重新初始化');
          console.log('💡 [提示] 现在可以在game场景中重新解锁成就并正常显示通知');
        };
        return AchievementManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "achievementPanel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "openButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "closeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scrollContent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "achievementPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "unlockAllButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lockAllButton", [_dec8], {
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

System.register("chunks:///_virtual/AchievementNotificationManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AchievementData.ts', './AchievementNotificationUI.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, instantiate, Vec3, Component, AchievementData, AchievementNotificationUI;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      AchievementData = module.AchievementData;
    }, function (module) {
      AchievementNotificationUI = module.AchievementNotificationUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "0116bEwUVxAO7Kn/D0cRfJv", "AchievementNotificationManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 成就通知管理器
       * 负责在成就解锁时生成通知prefab并管理其生命周期
       */
      var AchievementNotificationManager = exports('AchievementNotificationManager', (_dec = ccclass('AchievementNotificationManager'), _dec2 = property({
        type: Prefab,
        tooltip: "成就通知预制体"
      }), _dec3 = property({
        type: Node,
        tooltip: "通知显示的父节点（通常是Canvas下的UI层）"
      }), _dec4 = property({
        tooltip: "通知显示时间（秒）"
      }), _dec5 = property({
        tooltip: "通知之间的垂直间距"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AchievementNotificationManager, _Component);
        function AchievementNotificationManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "achievementNotificationPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notificationParent", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "displayDuration", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "verticalSpacing", _descriptor4, _assertThisInitialized(_this));
          _this.achievementData = null;
          _this.activeNotifications = [];
          return _this;
        }
        var _proto = AchievementNotificationManager.prototype;
        _proto.onLoad = function onLoad() {
          // 获取成就数据实例
          this.achievementData = AchievementData.getInstance();

          // 如果没有设置通知父节点，使用当前节点
          if (!this.notificationParent) {
            this.notificationParent = this.node;
          }
        }

        /**
         * 显示成就解锁通知
         * @param achievementId 成就ID
         */;
        _proto.showAchievementNotification = function showAchievementNotification(achievementId) {
          var _this2 = this;
          console.log('🔔 [AchievementNotificationManager] 开始显示成就通知:', achievementId);

          // 详细检查每个必要组件
          if (!this.achievementNotificationPrefab) {
            console.error('❌ [AchievementNotificationManager] 缺少成就通知预制体 (achievementNotificationPrefab)');
            return;
          }
          if (!this.notificationParent) {
            console.error('❌ [AchievementNotificationManager] 缺少通知父节点 (notificationParent)');
            return;
          }
          if (!this.achievementData) {
            console.error('❌ [AchievementNotificationManager] 缺少成就数据 (achievementData)');
            return;
          }
          console.log('✅ [AchievementNotificationManager] 所有必要组件检查通过');

          // 获取成就定义
          var achievementDef = this.achievementData.getAchievementDefinition(achievementId);
          if (!achievementDef) {
            console.error('AchievementNotificationManager: 找不到成就定义:', achievementId);
            return;
          }

          // 创建通知节点
          var notificationNode = instantiate(this.achievementNotificationPrefab);
          if (!notificationNode) {
            console.error('AchievementNotificationManager: 无法实例化通知预制体');
            return;
          }

          // 添加到父节点
          this.notificationParent.addChild(notificationNode);

          // 设置位置（根据当前活跃通知数量调整Y位置）
          var yOffset = this.activeNotifications.length * this.verticalSpacing;
          notificationNode.setPosition(new Vec3(0, -yOffset, 0));

          // 获取通知脚本并设置成就信息
          var notificationScript = notificationNode.getComponent(AchievementNotificationUI);
          if (notificationScript) {
            notificationScript.setAchievementInfo(achievementDef);
            // 播放动画效果
            notificationScript.playNotificationAnimation();
          } else {
            console.error('❌ [AchievementNotificationManager] 通知预制体缺少AchievementNotificationUI组件');
          }

          // 添加到活跃通知列表
          this.activeNotifications.push(notificationNode);

          // 设置定时销毁
          this.scheduleOnce(function () {
            _this2.removeNotification(notificationNode);
          }, this.displayDuration);
          console.log('🎉 [AchievementNotificationManager] 显示成就解锁通知:', achievementDef.name);
        }

        /**
         * 移除通知并重新排列其他通知
         * @param notificationNode 要移除的通知节点
         */;
        _proto.removeNotification = function removeNotification(notificationNode) {
          var index = this.activeNotifications.indexOf(notificationNode);
          if (index === -1) {
            return;
          }

          // 从列表中移除
          this.activeNotifications.splice(index, 1);

          // 销毁节点
          if (notificationNode && notificationNode.isValid) {
            notificationNode.destroy();
          }

          // 重新排列剩余通知的位置
          this.rearrangeNotifications();
        }

        /**
         * 重新排列通知位置
         */;
        _proto.rearrangeNotifications = function rearrangeNotifications() {
          for (var i = 0; i < this.activeNotifications.length; i++) {
            var notification = this.activeNotifications[i];
            if (notification && notification.isValid) {
              var yOffset = i * this.verticalSpacing;
              notification.setPosition(new Vec3(0, -yOffset, 0));
            }
          }
        }

        /**
         * 批量显示多个成就解锁通知
         * @param achievementIds 成就ID数组
         */;
        _proto.showMultipleAchievements = function showMultipleAchievements(achievementIds) {
          var _this3 = this;
          var _loop = function _loop(i) {
            // 延迟显示，避免同时出现太多通知
            _this3.scheduleOnce(function () {
              _this3.showAchievementNotification(achievementIds[i]);
            }, i * 0.5); // 每个通知间隔0.5秒
          };

          for (var i = 0; i < achievementIds.length; i++) {
            _loop(i);
          }
        }

        /**
         * 清除所有活跃的通知
         */;
        _proto.clearAllNotifications = function clearAllNotifications() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.activeNotifications), _step; !(_step = _iterator()).done;) {
            var notification = _step.value;
            if (notification && notification.isValid) {
              notification.destroy();
            }
          }
          this.activeNotifications = [];
        };
        return AchievementNotificationManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "achievementNotificationPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "notificationParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "displayDuration", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3.0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "verticalSpacing", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 80;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AchievementNotificationUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "231e9z1JQtN+oZCUmqHVZln", "AchievementNotificationUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 成就通知UI组件
       * 绑定在成就通知prefab上，用于显示具体的成就信息
       */
      var AchievementNotificationUI = exports('AchievementNotificationUI', (_dec = ccclass('AchievementNotificationUI'), _dec2 = property({
        type: Label,
        tooltip: "显示成就名称的文字节点"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AchievementNotificationUI, _Component);
        function AchievementNotificationUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "achievementLabel", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = AchievementNotificationUI.prototype;
        _proto.onLoad = function onLoad() {
          // 初始化检查
          if (!this.achievementLabel) {
            console.error('❌ [AchievementNotificationUI] 缺少成就文字标签组件');
          }
        }

        /**
         * 设置成就信息
         * @param achievementDef 成就定义
         */;
        _proto.setAchievementInfo = function setAchievementInfo(achievementDef) {
          if (!achievementDef) {
            console.error('❌ [AchievementNotificationUI] 成就定义为空');
            return;
          }

          // 设置成就文本，格式：成就名称 - 成就描述
          if (this.achievementLabel) {
            var displayText = "\uD83C\uDFC6 " + achievementDef.name;
            this.achievementLabel.string = displayText;
          }
          console.log('✅ [AchievementNotificationUI] 设置成就通知信息:', achievementDef.name);
        }

        /**
         * 直接设置成就文本
         * @param text 要显示的文本
         */;
        _proto.setAchievementText = function setAchievementText(text) {
          if (this.achievementLabel) {
            this.achievementLabel.string = text;
          }
        }

        /**
         * 播放通知动画（可选实现）
         */;
        _proto.playNotificationAnimation = function playNotificationAnimation() {
          var _this2 = this;
          // 简单的缩放动画效果
          if (!this.node) return;
          var originalScale = this.node.scale.clone();
          this.node.setScale(0.8, 0.8, 1);

          // 使用scheduleOnce模拟动画
          this.scheduleOnce(function () {
            _this2.node.setScale(1.1, 1.1, 1);
            _this2.scheduleOnce(function () {
              _this2.node.setScale(originalScale);
            }, 0.1);
          }, 0.05);
        }

        /**
         * 获取文字标签（用于外部访问）
         */;
        _proto.getLabel = function getLabel() {
          return this.achievementLabel;
        };
        return AchievementNotificationUI;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "achievementLabel", [_dec2], {
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

System.register("chunks:///_virtual/AchievementPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AchievementManager.ts', './AchievementConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Button, Component, AchievementManager, AchievementConfig;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      AchievementManager = module.AchievementManager;
    }, function (module) {
      AchievementConfig = module.AchievementConfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "6780fm5+o1Ior9l+qZjeZCc", "AchievementPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AchievementPanel = exports('AchievementPanel', (_dec = ccclass('AchievementPanel'), _dec2 = property({
        type: Label,
        tooltip: '成就进度标签'
      }), _dec3 = property({
        type: Button,
        tooltip: '重置成就按钮'
      }), _dec4 = property({
        type: AchievementManager,
        tooltip: '成就管理器引用'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AchievementPanel, _Component);
        function AchievementPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "progressLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resetButton", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "achievementManager", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = AchievementPanel.prototype;
        _proto.onLoad = function onLoad() {
          this.setupEventListeners();
        };
        _proto.start = function start() {
          this.updateProgressDisplay();
        }

        /**
         * 设置事件监听器
         */;
        _proto.setupEventListeners = function setupEventListeners() {
          if (this.resetButton) {
            this.resetButton.node.on(Button.EventType.CLICK, this.onResetButtonClicked, this);
          }
        }

        /**
         * 更新进度显示
         */;
        _proto.updateProgressDisplay = function updateProgressDisplay() {
          if (this.progressLabel) {
            var progress = this.getAchievementProgress();
            this.progressLabel.string = "\u6210\u5C31\u8FDB\u5EA6: " + progress.unlocked + "/" + progress.total + " (" + progress.percentage + "%)";
          }
        }

        /**
         * 获取成就进度
         */;
        _proto.getAchievementProgress = function getAchievementProgress() {
          if (this.achievementManager) {
            return this.achievementManager.getAchievementProgress();
          }

          // 如果没有管理器引用，直接从配置获取
          var total = AchievementConfig.getTotalCount();
          var unlocked = AchievementConfig.getUnlockedCount();
          var percentage = total > 0 ? Math.round(unlocked / total * 100) : 0;
          return {
            unlocked: unlocked,
            total: total,
            percentage: percentage
          };
        }

        /**
         * 重置按钮点击事件
         */;
        _proto.onResetButtonClicked = function onResetButtonClicked() {
          console.log('[AchievementPanel] 重置成就按钮被点击');
          if (this.achievementManager) {
            this.achievementManager.resetAllAchievements();
            this.updateProgressDisplay();
          } else {
            AchievementConfig.resetAllAchievements();
            this.updateProgressDisplay();
          }
        }

        /**
         * 刷新面板数据
         */;
        _proto.refreshPanel = function refreshPanel() {
          this.updateProgressDisplay();
          if (this.achievementManager) {
            this.achievementManager.refreshAchievements();
          }
        };
        _proto.onDestroy = function onDestroy() {
          if (this.resetButton) {
            this.resetButton.node.off(Button.EventType.CLICK, this.onResetButtonClicked, this);
          }
        };
        return AchievementPanel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "resetButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "achievementManager", [_dec4], {
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

System.register("chunks:///_virtual/AudioTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioSource, Button, resources, AudioClip, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      Button = module.Button;
      resources = module.resources;
      AudioClip = module.AudioClip;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "e1c77EbziFKEIrevjRUdiBV", "AudioTest", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 🎵 音频测试脚本
       * 用于测试音频播放功能是否正常
       */
      var AudioTest = exports('AudioTest', (_dec = ccclass('AudioTest'), _dec2 = property(AudioSource), _dec3 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioTest, _Component);
        function AudioTest() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "testAudioSource", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "testButton", _descriptor2, _assertThisInitialized(_this));
          _this.testClip = null;
          return _this;
        }
        var _proto = AudioTest.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          console.log('🎵 AudioTest 组件初始化...');

          // 绑定测试按钮事件
          if (this.testButton) {
            this.testButton.node.on('click', function () {
              _this2.testAudioPlay();
            }, this);
          }

          // 加载测试音频
          this.loadTestAudio();
        }

        /**
         * 加载测试音频
         */;
        _proto.loadTestAudio = function loadTestAudio() {
          var _this3 = this;
          console.log('📥 正在加载测试音频: audio/bgm/school-bgm');
          resources.load('audio/bgm/school-bgm', AudioClip, function (err, clip) {
            if (err) {
              console.error('❌ 测试音频加载失败:', err);
              return;
            }
            _this3.testClip = clip;
            console.log('✅ 测试音频加载成功:', clip);
            console.log('  - 音频名称:', clip.name);
            console.log('  - 音频UUID:', clip._uuid);
          });
        }

        /**
         * 测试音频播放
         */;
        _proto.testAudioPlay = function testAudioPlay() {
          console.log('🎵 开始测试音频播放...');
          if (!this.testAudioSource) {
            console.error('❌ testAudioSource 未设置');
            return;
          }
          if (!this.testClip) {
            console.error('❌ testClip 未加载');
            return;
          }
          try {
            // 配置音频源
            this.testAudioSource.clip = this.testClip;
            this.testAudioSource.loop = false;
            this.testAudioSource.volume = 0.8;
            console.log('🔧 音频源配置完成');
            console.log('  - clip:', this.testAudioSource.clip);
            console.log('  - loop:', this.testAudioSource.loop);
            console.log('  - volume:', this.testAudioSource.volume);

            // 播放音频
            this.testAudioSource.play();
            console.log('✅ 测试音频开始播放');
            console.log('  - 播放状态:', this.testAudioSource.playing);
          } catch (error) {
            console.error('❌ 播放测试音频时发生错误:', error);
          }
        }

        /**
         * 停止音频播放
         */;
        _proto.stopAudio = function stopAudio() {
          if (this.testAudioSource && this.testAudioSource.playing) {
            this.testAudioSource.stop();
            console.log('🔇 测试音频已停止');
          }
        };
        return AudioTest;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "testAudioSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "testButton", [_dec3], {
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

System.register("chunks:///_virtual/ClickAudioController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, AudioSource, Input, Component;
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
      AudioSource = module.AudioSource;
      Input = module.Input;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "3e291uY5QJJkLE2oLlr4C2J", "ClickAudioController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 点击音频控制器
       * 绑定节点数组和音频源，点击数组中的任意节点就播放音频
       */
      var ClickAudioController = exports('ClickAudioController', (_dec = ccclass('ClickAudioController'), _dec2 = property({
        type: [Node],
        displayName: "目标节点数组",
        tooltip: "点击这些节点时会播放音频"
      }), _dec3 = property({
        type: AudioSource,
        displayName: "音频源",
        tooltip: "要播放的音频源组件"
      }), _dec4 = property({
        displayName: "启用日志",
        tooltip: "是否在控制台输出调试信息"
      }), _dec5 = property({
        displayName: "允许重复播放",
        tooltip: "如果音频正在播放，是否允许重新开始播放"
      }), _dec6 = property({
        displayName: "音量",
        tooltip: "播放音频的音量 (0-1)",
        range: [0, 1, 0.1]
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ClickAudioController, _Component);
        function ClickAudioController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "targetNodes", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "audioSource", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enableLog", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "allowReplay", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "volume", _descriptor5, _assertThisInitialized(_this));
          _this._isListening = false;
          return _this;
        }
        var _proto = ClickAudioController.prototype;
        _proto.onEnable = function onEnable() {
          this.startListening();
        };
        _proto.onDisable = function onDisable() {
          this.stopListening();
        }

        /**
         * 开始监听点击事件
         */;
        _proto.startListening = function startListening() {
          var _this2 = this;
          if (this._isListening) return;

          // 为每个目标节点添加点击事件监听
          this.targetNodes.forEach(function (node, index) {
            if (node && node.isValid) {
              node.on(Input.EventType.TOUCH_END, _this2.onNodeClick, _this2);
              if (_this2.enableLog) {
                console.log("[ClickAudioController] \u5DF2\u4E3A\u8282\u70B9 \"" + node.name + "\" \u6DFB\u52A0\u70B9\u51FB\u76D1\u542C");
              }
            }
          });
          this._isListening = true;
          if (this.enableLog) {
            console.log("[ClickAudioController] \u5F00\u59CB\u76D1\u542C " + this.targetNodes.length + " \u4E2A\u8282\u70B9\u7684\u70B9\u51FB\u4E8B\u4EF6");
          }
        }

        /**
         * 停止监听点击事件
         */;
        _proto.stopListening = function stopListening() {
          var _this3 = this;
          if (!this._isListening) return;

          // 移除所有节点的点击事件监听
          this.targetNodes.forEach(function (node) {
            if (node && node.isValid) {
              node.off(Input.EventType.TOUCH_END, _this3.onNodeClick, _this3);
            }
          });
          this._isListening = false;
          if (this.enableLog) {
            console.log("[ClickAudioController] \u5DF2\u505C\u6B62\u76D1\u542C\u70B9\u51FB\u4E8B\u4EF6");
          }
        }

        /**
         * 节点点击事件处理
         */;
        _proto.onNodeClick = function onNodeClick(event) {
          var clickedNode = event.target;
          if (this.enableLog) {
            console.log("[ClickAudioController] \u70B9\u51FB\u4E86\u8282\u70B9: " + clickedNode.name);
          }
          this.playAudio();
        }

        /**
         * 播放音频
         */;
        _proto.playAudio = function playAudio() {
          if (!this.audioSource) {
            if (this.enableLog) {
              console.warn("[ClickAudioController] \u97F3\u9891\u6E90\u672A\u8BBE\u7F6E\uFF0C\u65E0\u6CD5\u64AD\u653E\u97F3\u9891");
            }
            return;
          }
          if (!this.audioSource.clip) {
            if (this.enableLog) {
              console.warn("[ClickAudioController] \u97F3\u9891\u6E90\u6CA1\u6709\u97F3\u9891\u526A\u8F91\uFF0C\u65E0\u6CD5\u64AD\u653E");
            }
            return;
          }

          // 检查是否允许重复播放
          if (!this.allowReplay && this.audioSource.playing) {
            if (this.enableLog) {
              console.log("[ClickAudioController] \u97F3\u9891\u6B63\u5728\u64AD\u653E\u4E2D\uFF0C\u8DF3\u8FC7\u672C\u6B21\u64AD\u653E");
            }
            return;
          }

          // 设置音量并播放
          this.audioSource.volume = this.volume;
          this.audioSource.play();
          if (this.enableLog) {
            console.log("[ClickAudioController] \u64AD\u653E\u97F3\u9891: " + this.audioSource.clip.name + "\uFF0C\u97F3\u91CF: " + this.volume);
          }
        }

        /**
         * 停止音频播放
         */;
        _proto.stopAudio = function stopAudio() {
          if (this.audioSource && this.audioSource.playing) {
            this.audioSource.stop();
            if (this.enableLog) {
              console.log("[ClickAudioController] \u5DF2\u505C\u6B62\u97F3\u9891\u64AD\u653E");
            }
          }
        }

        /**
         * 暂停音频播放
         */;
        _proto.pauseAudio = function pauseAudio() {
          if (this.audioSource && this.audioSource.playing) {
            this.audioSource.pause();
            if (this.enableLog) {
              console.log("[ClickAudioController] \u5DF2\u6682\u505C\u97F3\u9891\u64AD\u653E");
            }
          }
        }

        /**
         * 恢复音频播放
         */;
        _proto.resumeAudio = function resumeAudio() {
          if (this.audioSource) {
            this.audioSource.play();
            if (this.enableLog) {
              console.log("[ClickAudioController] \u5DF2\u6062\u590D\u97F3\u9891\u64AD\u653E");
            }
          }
        }

        /**
         * 添加目标节点
         */;
        _proto.addTargetNode = function addTargetNode(node) {
          if (!node || this.targetNodes.indexOf(node) !== -1) return;
          this.targetNodes.push(node);

          // 如果正在监听，为新节点添加事件
          if (this._isListening) {
            node.on(Input.EventType.TOUCH_END, this.onNodeClick, this);
          }
          if (this.enableLog) {
            console.log("[ClickAudioController] \u6DFB\u52A0\u76EE\u6807\u8282\u70B9: " + node.name);
          }
        }

        /**
         * 移除目标节点
         */;
        _proto.removeTargetNode = function removeTargetNode(node) {
          var index = this.targetNodes.indexOf(node);
          if (index === -1) return;

          // 移除事件监听
          if (node && node.isValid) {
            node.off(Input.EventType.TOUCH_END, this.onNodeClick, this);
          }

          // 从数组中移除
          this.targetNodes.splice(index, 1);
          if (this.enableLog) {
            console.log("[ClickAudioController] \u79FB\u9664\u76EE\u6807\u8282\u70B9: " + node.name);
          }
        }

        /**
         * 清空所有目标节点
         */;
        _proto.clearAllTargetNodes = function clearAllTargetNodes() {
          this.stopListening();
          this.targetNodes = [];
          if (this.enableLog) {
            console.log("[ClickAudioController] \u5DF2\u6E05\u7A7A\u6240\u6709\u76EE\u6807\u8282\u70B9");
          }
        }

        /**
         * 设置音频源
         */;
        _proto.setAudioSource = function setAudioSource(audioSource) {
          this.audioSource = audioSource;
          if (this.enableLog) {
            console.log("[ClickAudioController] \u8BBE\u7F6E\u97F3\u9891\u6E90: " + (audioSource ? audioSource.node.name : 'null'));
          }
        }

        /**
         * 检查音频是否正在播放
         */;
        _proto.isPlaying = function isPlaying() {
          return this.audioSource ? this.audioSource.playing : false;
        };
        return ClickAudioController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "targetNodes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enableLog", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "allowReplay", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "volume", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameAchievementIntegration.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameAchievementManager.ts', './GameAchievementTracker.ts', './AchievementData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, find, Node, Component, GameAchievementManager, GameAchievementTracker, Heroine;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      find = module.find;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      GameAchievementManager = module.GameAchievementManager;
    }, function (module) {
      GameAchievementTracker = module.GameAchievementTracker;
    }, function (module) {
      Heroine = module.Heroine;
    }],
    execute: function () {
      exports({
        addAffection: addAffection,
        getAffection: getAffection,
        updateAffection: updateAffection
      });
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "da5b58uNppHh78fCYNEq859", "GameAchievementIntegration", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 游戏成就系统集成类
       * 提供简单的API供现有游戏系统调用，无需了解内部实现细节
       */
      var GameAchievementIntegration = exports('GameAchievementIntegration', (_dec = ccclass('GameAchievementIntegration'), _dec2 = property({
        displayName: "自动初始化",
        tooltip: "勾选后将在组件加载时自动初始化成就系统"
      }), _dec3 = property({
        displayName: "调试模式",
        tooltip: "勾选后将输出详细的调试日志"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameAchievementIntegration, _Component);
        function GameAchievementIntegration() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "autoInitialize", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "debugMode", _descriptor2, _assertThisInitialized(_this));
          _this.achievementManager = null;
          _this.affectionTracker = null;
          _this.isInitialized = false;
          return _this;
        }
        var _proto = GameAchievementIntegration.prototype;
        _proto.onLoad = function onLoad() {
          if (this.autoInitialize) {
            this.initializeAchievementSystem();
          }
        }

        /**
         * 初始化成就系统
         * 在游戏开始时调用一次即可
         */;
        _proto.initializeAchievementSystem = function initializeAchievementSystem() {
          if (this.isInitialized) {
            console.warn('⚠️ [GameAchievementIntegration] 成就系统已经初始化过了');
            return;
          }
          try {
            // 创建成就管理器节点
            var managerNode = new Node('GameAchievementManager');
            this.achievementManager = managerNode.addComponent(GameAchievementManager);
            this.node.addChild(managerNode);

            // 创建好感度追踪器节点
            var trackerNode = new Node('GameAchievementTracker');
            this.affectionTracker = trackerNode.addComponent(GameAchievementTracker);
            this.node.addChild(trackerNode);
            this.isInitialized = true;
            console.log('✅ [GameAchievementIntegration] 成就系统初始化完成');
            if (this.debugMode) {
              this.logSystemStatus();
            }
          } catch (error) {
            console.error('❌ [GameAchievementIntegration] 成就系统初始化失败:', error);
          }
        }

        /**
         * 更新女主角好感度
         * 这是外部系统最常用的API
         * @param heroineName 女主角名称（中文或英文ID）
         * @param newValue 新的好感度值
         */;
        _proto.updateHeroineAffection = function updateHeroineAffection(heroineName, newValue) {
          if (!this.ensureInitialized()) return;
          var heroine = this.parseHeroineName(heroineName);
          if (!heroine) {
            console.error('❌ [GameAchievementIntegration] 无效的女主角名称:', heroineName);
            return;
          }
          this.affectionTracker.updateAffection(heroine, newValue);
        }

        /**
         * 增加女主角好感度
         * @param heroineName 女主角名称
         * @param delta 增加的好感度值
         */;
        _proto.addHeroineAffection = function addHeroineAffection(heroineName, delta) {
          if (!this.ensureInitialized()) return;
          var heroine = this.parseHeroineName(heroineName);
          if (!heroine) {
            console.error('❌ [GameAchievementIntegration] 无效的女主角名称:', heroineName);
            return;
          }
          this.affectionTracker.addAffection(heroine, delta);
        }

        /**
         * 减少女主角好感度
         * @param heroineName 女主角名称
         * @param delta 减少的好感度值
         */;
        _proto.reduceHeroineAffection = function reduceHeroineAffection(heroineName, delta) {
          if (!this.ensureInitialized()) return;
          var heroine = this.parseHeroineName(heroineName);
          if (!heroine) {
            console.error('❌ [GameAchievementIntegration] 无效的女主角名称:', heroineName);
            return;
          }
          this.affectionTracker.reduceAffection(heroine, delta);
        }

        /**
         * 获取女主角当前好感度
         * @param heroineName 女主角名称
         * @returns 当前好感度值，如果女主角不存在返回-1
         */;
        _proto.getHeroineAffection = function getHeroineAffection(heroineName) {
          if (!this.ensureInitialized()) return -1;
          var heroine = this.parseHeroineName(heroineName);
          if (!heroine) {
            console.error('❌ [GameAchievementIntegration] 无效的女主角名称:', heroineName);
            return -1;
          }
          return this.affectionTracker.getAffection(heroine);
        }

        /**
         * 获取成就统计信息
         * @returns 成就统计对象
         */;
        _proto.getAchievementStats = function getAchievementStats() {
          if (!this.ensureInitialized()) {
            return {
              unlocked: 0,
              total: 0,
              percentage: 0
            };
          }
          return this.achievementManager.getAchievementStats();
        }

        /**
         * 解析女主角名称
         * 支持中文名称和英文ID
         * @param name 女主角名称
         * @returns 女主角枚举值
         */;
        _proto.parseHeroineName = function parseHeroineName(name) {
          // 中文名称映射
          var chineseNameMap = {
            '林雅欣': Heroine.LIN_YAXIN,
            '王小萌': Heroine.WANG_XIAOMENG,
            '陈静怡': Heroine.CHEN_JINGYI
          };

          // 英文ID映射
          var englishIdMap = {
            'lin_yaxin': Heroine.LIN_YAXIN,
            'wang_xiaomeng': Heroine.WANG_XIAOMENG,
            'chen_jingyi': Heroine.CHEN_JINGYI,
            'LIN_YAXIN': Heroine.LIN_YAXIN,
            'WANG_XIAOMENG': Heroine.WANG_XIAOMENG,
            'CHEN_JINGYI': Heroine.CHEN_JINGYI
          };
          return chineseNameMap[name] || englishIdMap[name] || null;
        }

        /**
         * 确保系统已初始化
         */;
        _proto.ensureInitialized = function ensureInitialized() {
          if (!this.isInitialized) {
            console.error('❌ [GameAchievementIntegration] 成就系统未初始化，请先调用initializeAchievementSystem()');
            return false;
          }
          if (!this.achievementManager || !this.affectionTracker) {
            console.error('❌ [GameAchievementIntegration] 成就系统组件未正确创建');
            return false;
          }
          return true;
        }

        /**
         * 输出系统状态信息
         */;
        _proto.logSystemStatus = function logSystemStatus() {
          if (!this.ensureInitialized()) return;
          console.log('📊 [GameAchievementIntegration] 系统状态:');

          // 成就统计
          var stats = this.getAchievementStats();
          console.log("  \uD83C\uDFC6 \u6210\u5C31\u8FDB\u5EA6: " + stats.unlocked + "/" + stats.total + " (" + stats.percentage + "%)");

          // 好感度状态
          this.affectionTracker.debugLogAffectionStatus();

          // 详细成就列表
          if (this.debugMode) {
            this.achievementManager.debugLogAchievementStatus();
          }
        }

        // ===============================
        // 调试和测试功能
        // ===============================

        /**
         * 调试：模拟好感度变化
         * @param heroineName 女主角名称
         * @param targetValue 目标好感度值
         */;
        _proto.debugSimulateAffectionChange = function debugSimulateAffectionChange(heroineName, targetValue) {
          if (!this.ensureInitialized()) return;
          var heroine = this.parseHeroineName(heroineName);
          if (!heroine) {
            console.error('❌ [GameAchievementIntegration] 无效的女主角名称:', heroineName);
            return;
          }
          this.affectionTracker.debugSimulateAffectionChange(heroine, targetValue);
        }

        /**
         * 调试：手动解锁成就
         * @param achievementId 成就ID
         */;
        _proto.debugUnlockAchievement = function debugUnlockAchievement(achievementId) {
          if (!this.ensureInitialized()) return;
          this.achievementManager.debugUnlockAchievement(achievementId);
        }

        /**
         * 调试：重置所有数据
         */;
        _proto.debugResetAllData = function debugResetAllData() {
          if (!this.ensureInitialized()) return;
          console.log('🔄 [GameAchievementIntegration] 重置所有数据');
          this.affectionTracker.resetAllAffection();
          this.achievementManager.debugResetAllAchievements();
        }

        /**
         * 获取可用的女主角列表
         * @returns 女主角名称列表
         */;
        _proto.getAvailableHeroines = function getAvailableHeroines() {
          return [{
            chinese: '林雅欣',
            english: 'LIN_YAXIN'
          }, {
            chinese: '王小萌',
            english: 'WANG_XIAOMENG'
          }, {
            chinese: '陈静怡',
            english: 'CHEN_JINGYI'
          }];
        };
        return GameAchievementIntegration;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "autoInitialize", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "debugMode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      // ===============================
      // 全局便捷函数
      // ===============================

      /**
       * 全局便捷函数：更新好感度
       * 可以在任何地方调用
       */
      function updateAffection(heroineName, newValue) {
        var _find;
        var integration = (_find = find('GameAchievementIntegration')) == null ? void 0 : _find.getComponent(GameAchievementIntegration);
        if (integration) {
          integration.updateHeroineAffection(heroineName, newValue);
        } else {
          console.error('❌ 找不到GameAchievementIntegration组件');
        }
      }

      /**
       * 全局便捷函数：增加好感度
       */
      function addAffection(heroineName, delta) {
        var _find2;
        var integration = (_find2 = find('GameAchievementIntegration')) == null ? void 0 : _find2.getComponent(GameAchievementIntegration);
        if (integration) {
          integration.addHeroineAffection(heroineName, delta);
        } else {
          console.error('❌ 找不到GameAchievementIntegration组件');
        }
      }

      /**
       * 全局便捷函数：获取好感度
       */
      function getAffection(heroineName) {
        var _find3;
        var integration = (_find3 = find('GameAchievementIntegration')) == null ? void 0 : _find3.getComponent(GameAchievementIntegration);
        if (integration) {
          return integration.getHeroineAffection(heroineName);
        } else {
          console.error('❌ 找不到GameAchievementIntegration组件');
          return -1;
        }
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameAchievementManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AchievementData.ts', './StartSceneIntegration.ts', './AchievementNotificationManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, director, game, Component, AchievementData, Heroine, StartSceneIntegration, AchievementNotificationManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      game = module.game;
      Component = module.Component;
    }, function (module) {
      AchievementData = module.AchievementData;
      Heroine = module.Heroine;
    }, function (module) {
      StartSceneIntegration = module.StartSceneIntegration;
    }, function (module) {
      AchievementNotificationManager = module.AchievementNotificationManager;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "d216bASb5hAZ6Vn+6wrkJJ/", "GameAchievementManager", undefined);
      var ccclass = _decorator.ccclass;

      /**
       * 游戏成就管理器
       * 负责在游戏过程中监听和处理成就解锁
       */
      var GameAchievementManager = exports('GameAchievementManager', (_dec = ccclass('GameAchievementManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameAchievementManager, _Component);
        function GameAchievementManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.achievementData = null;
          _this.startSceneIntegration = null;
          _this.notificationManager = null;
          return _this;
        }
        var _proto = GameAchievementManager.prototype;
        _proto.onLoad = function onLoad() {
          // 确保单例
          if (GameAchievementManager.instance) {
            this.node.destroy();
            return;
          }
          GameAchievementManager.instance = this;
          this.achievementData = AchievementData.getInstance();
          this.startSceneIntegration = StartSceneIntegration.getInstance();

          // 初始化通知管理器
          this.notificationManager = this.node.getComponent(AchievementNotificationManager);
          if (!this.notificationManager) {
            console.log('ℹ️ [GameAchievementManager] 未找到AchievementNotificationManager组件，将在需要时查找');
          }

          // 确保成就数据已正确初始化
          if (!this.achievementData) {
            console.error('❌ [GameAchievementManager] AchievementData初始化失败');
            return;
          }

          // 标记为常驻节点，防止场景切换时被销毁
          try {
            // 只有当节点在场景根节点下时才能设置为持久节点
            if (this.node.parent && this.node.parent === director.getScene()) {
              game.addPersistRootNode(this.node);
              console.log('🔗 [GameAchievementManager] 成就管理器已设为常驻节点');
            } else {
              console.log('ℹ️ [GameAchievementManager] 节点不在场景根节点下，跳过持久化设置');
            }
          } catch (error) {
            console.log('ℹ️ [GameAchievementManager] 节点持久化设置失败，但不影响功能:', error.message);
          }
          console.log('🏆 [GameAchievementManager] 游戏成就管理器已初始化');
        };
        _proto.onDestroy = function onDestroy() {
          if (GameAchievementManager.instance === this) {
            GameAchievementManager.instance = null;
          }
        }

        /**
         * 获取单例实例
         */;
        GameAchievementManager.getInstance = function getInstance() {
          return GameAchievementManager.instance;
        }

        /**
         * 检查并处理女主角好感度变化
         * @param heroine 女主角
         * @param newAffection 新的好感度值
         * @param oldAffection 旧的好感度值（可选）
         * @param forceShowNotification 是否强制显示通知（即使成就已解锁）
         */;
        _proto.onAffectionChanged = function onAffectionChanged(heroine, newAffection, oldAffection, forceShowNotification) {
          var _heroineNames;
          if (forceShowNotification === void 0) {
            forceShowNotification = false;
          }
          if (!this.achievementData) {
            console.error('❌ [GameAchievementManager] AchievementData未初始化');
            return;
          }

          // 输出明显的好感度变化日志
          var heroineNames = (_heroineNames = {}, _heroineNames[Heroine.LIN_YAXIN] = '林雅欣', _heroineNames[Heroine.WANG_XIAOMENG] = '王小萌', _heroineNames[Heroine.CHEN_JINGYI] = '陈静怡', _heroineNames);
          var heroineName = heroineNames[heroine] || heroine;
          if (oldAffection !== undefined) {
            var change = newAffection - oldAffection;
            var changeText = change > 0 ? "+" + change : "" + change;
            console.log("\uD83D\uDC95 [\u597D\u611F\u5EA6\u53D8\u5316] " + heroineName + ": " + oldAffection + " \u2192 " + newAffection + " (" + changeText + ")");
          } else {
            console.log("\uD83D\uDC95 [\u597D\u611F\u5EA6\u66F4\u65B0] " + heroineName + ": " + newAffection);
          }
          if (forceShowNotification) {
            console.log("\uD83D\uDD14 [\u5F3A\u5236\u6A21\u5F0F] \u5C06\u5F3A\u5236\u663E\u793A\u7B26\u5408\u6761\u4EF6\u7684\u6210\u5C31\u901A\u77E5");
          }

          // 检查是否有成就可以解锁
          var unlockedAchievements = this.achievementData.checkAffectionAchievements(heroine, newAffection, forceShowNotification);

          // 处理新解锁的成就
          for (var _iterator = _createForOfIteratorHelperLoose(unlockedAchievements), _step; !(_step = _iterator()).done;) {
            var achievementId = _step.value;
            this.handleAchievementUnlocked(achievementId);
          }

          // 同步好感度进度到start场景
          if (this.startSceneIntegration) {
            this.startSceneIntegration.updateAffectionProgress(heroine, newAffection);
          }
        }

        /**
         * 处理成就解锁
         * @param achievementId 成就ID
         */;
        _proto.handleAchievementUnlocked = function handleAchievementUnlocked(achievementId) {
          if (!this.achievementData) return;
          var definition = this.achievementData.getAchievementDefinition(achievementId);
          if (!definition) {
            console.error('❌ [GameAchievementManager] 找不到成就定义:', achievementId);
            return;
          }

          // 输出明显的成就解锁日志
          var celebration = '🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉';
          console.log(celebration);
          console.log('🏆 [成就解锁] ' + definition.name);
          console.log('📝 [成就描述] ' + definition.description);
          console.log('🕐 [解锁时间] ' + new Date().toLocaleString());
          console.log(celebration);

          // 显示成就解锁通知
          console.log('📢 [GameAchievementManager] 准备调用通知管理器...');
          console.log('🔍 [调试] 当前notificationManager状态:', this.notificationManager ? '已找到' : '未找到');
          this.showAchievementNotification(achievementId);

          // 可以在这里添加更多的成就解锁效果
          // 比如播放音效、显示弹窗等
          this.showAchievementUnlockedEffect(definition);

          // 同步成就解锁状态到start场景
          if (this.startSceneIntegration) {
            this.startSceneIntegration.syncToStartScene();
          }
        }

        /**
         * 显示成就解锁通知
         * @param achievementId 成就ID
         */;
        _proto.showAchievementNotification = function showAchievementNotification(achievementId) {
          console.log('🔍 [showAchievementNotification] 开始查找通知管理器...');

          // 如果还没有找到通知管理器，尝试查找
          if (!this.notificationManager) {
            console.log('🔍 [showAchievementNotification] notificationManager为空，开始查找...');

            // 首先在当前节点查找
            this.notificationManager = this.node.getComponent(AchievementNotificationManager);
            if (this.notificationManager) {
              console.log('✅ [showAchievementNotification] 在当前节点找到通知管理器');
            } else {
              console.log('🔍 [showAchievementNotification] 当前节点没有，在场景中查找...');
              // 在场景中查找
              var scene = director.getScene();
              if (scene) {
                this.notificationManager = scene.getComponentInChildren(AchievementNotificationManager);
                if (this.notificationManager) {
                  console.log('✅ [showAchievementNotification] 在场景中找到通知管理器');
                } else {
                  console.log('❌ [showAchievementNotification] 场景中也没有找到通知管理器');
                }
              } else {
                console.log('❌ [showAchievementNotification] 获取场景失败');
              }
            }
          } else {
            console.log('✅ [showAchievementNotification] 通知管理器已存在');
          }
          if (this.notificationManager) {
            console.log('✅ [GameAchievementManager] 找到了通知管理器，开始调用showAchievementNotification...');
            console.log('🎯 [GameAchievementManager] 即将调用: notificationManager.showAchievementNotification(' + achievementId + ')');
            this.notificationManager.showAchievementNotification(achievementId);
            console.log('✅ [GameAchievementManager] showAchievementNotification调用完成');
          } else {
            console.error('❌ [GameAchievementManager] 未找到AchievementNotificationManager组件！');
            console.error('💡 [解决方案] 请检查：');
            console.error('   1. GameAchievementManager节点是否添加了AchievementNotificationManager组件');
            console.error('   2. 场景中是否存在包含AchievementNotificationManager的节点');
            console.error('   3. 组件是否正确导入和注册');
          }
        }

        /**
         * 显示成就解锁效果
         * @param definition 成就定义
         */;
        _proto.showAchievementUnlockedEffect = function showAchievementUnlockedEffect(definition) {
          // 这里可以添加视觉效果，比如：
          // 1. 播放成就解锁音效
          // 2. 显示成就解锁弹窗
          // 3. 粒子效果等

          console.log('✨ [成就效果] 播放成就解锁效果:', definition.name);

          // 示例：可以发送事件通知UI显示成就弹窗
          // this.node.emit('achievement-unlocked', definition);
        }

        /**
         * 手动解锁成就（调试用）
         * @param achievementId 成就ID
         */;
        _proto.debugUnlockAchievement = function debugUnlockAchievement(achievementId) {
          if (!this.achievementData) {
            console.error('❌ [GameAchievementManager] AchievementData未初始化');
            return false;
          }
          var success = this.achievementData.unlockAchievement(achievementId);
          if (success) {
            this.handleAchievementUnlocked(achievementId);
            console.log('🔧 [调试] 手动解锁成就:', achievementId);
          } else {
            console.log('⚠️ [调试] 成就解锁失败（可能已解锁）:', achievementId);
          }
          return success;
        }

        /**
         * 调试用：检查通知管理器配置
         */;
        _proto.debugCheckNotificationManager = function debugCheckNotificationManager() {
          console.log('🔍 [调试] 检查通知管理器配置...');
          console.log('🔍 [调试] 当前节点名称:', this.node.name);

          // 先尝试查找通知管理器
          var notificationManager = this.notificationManager;
          if (!notificationManager) {
            console.log('🔍 [调试] notificationManager属性为空，尝试查找...');
            notificationManager = this.node.getComponent(AchievementNotificationManager);
            if (!notificationManager) {
              console.log('🔍 [调试] 当前节点没有，在场景中查找...');
              var scene = director.getScene();
              if (scene) {
                notificationManager = scene.getComponentInChildren(AchievementNotificationManager);
              }
            }
          }
          if (!notificationManager) {
            console.error('❌ [调试] 未找到AchievementNotificationManager组件');
            console.log('🔍 [调试] 当前节点上的所有组件:');
            var components = this.node.getComponents(Component);
            components.forEach(function (comp, index) {
              console.log("   " + (index + 1) + ". " + comp.constructor.name);
            });
            console.log('💡 [解决方案] 请在GameAchievementManager节点上添加AchievementNotificationManager组件');
            return;
          }
          console.log('✅ [调试] 找到AchievementNotificationManager组件');

          // 检查预制体配置
          var prefab = notificationManager['achievementNotificationPrefab'];
          if (!prefab) {
            console.error('❌ [调试] 通知管理器缺少预制体 (achievementNotificationPrefab)');
            console.log('💡 [解决方案] 请在通知管理器的属性面板中设置Achievement Notification Prefab');
            return;
          }
          console.log('✅ [调试] 预制体配置正常:', prefab.name);

          // 检查父节点配置
          var parent = notificationManager['notificationParent'];
          if (!parent) {
            console.error('❌ [调试] 通知管理器缺少父节点 (notificationParent)');
            console.log('💡 [解决方案] 请在通知管理器的属性面板中设置Notification Parent');
            return;
          }
          console.log('✅ [调试] 父节点配置正常:', parent.name);

          // 检查成就数据
          var achievementData = notificationManager['achievementData'];
          if (!achievementData) {
            console.error('❌ [调试] 通知管理器缺少成就数据 (achievementData)');
            return;
          }
          console.log('✅ [调试] 成就数据配置正常');
          console.log('🎉 [调试] 通知管理器配置检查完成，所有配置都正常！');
          console.log('💡 [建议] 现在可以尝试解锁成就：');
          console.log('   cc.find("GameAchievementManager").getComponent("GameAchievementManager").debugUnlockAchievement("first_meet_yuki")');

          // 保存引用以备后用
          if (!this.notificationManager) {
            this.notificationManager = notificationManager;
            console.log('✅ [调试] 已保存通知管理器引用');
          }
        }

        /**
         * 获取成就统计信息
         */;
        _proto.getAchievementStats = function getAchievementStats() {
          if (!this.achievementData) {
            return {
              unlocked: 0,
              total: 0,
              percentage: 0
            };
          }
          var stats = this.achievementData.getAchievementStats();
          var unlocked = stats.unlocked;
          var total = stats.total;
          var percentage = total > 0 ? Math.round(unlocked / total * 100) : 0;
          return {
            unlocked: unlocked,
            total: total,
            percentage: percentage
          };
        }

        /**
         * 重置所有成就进度（调试用）
         */;
        _proto.debugResetAllAchievements = function debugResetAllAchievements() {
          if (!this.achievementData) {
            console.error('❌ [GameAchievementManager] AchievementData未初始化');
            return;
          }
          this.achievementData.resetAllProgress();
          console.log('🔧 [调试] 所有成就进度已重置');
        }

        /**
         * 输出当前成就状态（调试用）
         */;
        _proto.debugLogAchievementStatus = function debugLogAchievementStatus() {
          if (!this.achievementData) {
            console.error('❌ [GameAchievementManager] AchievementData未初始化');
            return;
          }
          var stats = this.getAchievementStats();
          console.log('📊 [成就统计] 已解锁:', stats.unlocked, '/', stats.total, "(" + stats.percentage + "%)");
          console.log('📋 [成就列表]:');
          var definitions = this.achievementData.getAllAchievementDefinitions();
          var progressList = this.achievementData.getAllAchievementProgress();
          for (var _iterator2 = _createForOfIteratorHelperLoose(definitions), _step2; !(_step2 = _iterator2()).done;) {
            var _progress, _progress2;
            var definition = _step2.value;
            var progress = null;
            for (var i = 0; i < progressList.length; i++) {
              if (progressList[i].id === definition.id) {
                progress = progressList[i];
                break;
              }
            }
            var status = (_progress = progress) != null && _progress.isUnlocked ? '✅ 已解锁' : '🔒 未解锁';
            var progressText = ((_progress2 = progress) == null ? void 0 : _progress2.currentProgress) !== undefined ? " (" + progress.currentProgress + "/" + definition.requiredValue + ")" : '';
            console.log("  " + status + " " + definition.name + progressText);
          }
        }

        /**
         * 调试用：强制显示成就通知（即使已解锁）
         * @param achievementId 成就ID
         */;
        _proto.debugForceShowNotification = function debugForceShowNotification(achievementId) {
          console.log("\uD83D\uDD14 [\u5F3A\u5236\u901A\u77E5] \u5F3A\u5236\u663E\u793A\u6210\u5C31\u901A\u77E5: " + achievementId);
          if (!this.achievementData) {
            console.error('❌ [调试] AchievementData未初始化');
            return;
          }
          var definition = this.achievementData.getAchievementDefinition(achievementId);
          if (!definition) {
            console.error("\u274C [\u8C03\u8BD5] \u627E\u4E0D\u5230\u6210\u5C31\u5B9A\u4E49: " + achievementId);
            return;
          }
          var progress = this.achievementData.getAchievementProgress(achievementId);
          if (progress && progress.isUnlocked) {
            console.log("\uD83D\uDD14 [\u5F3A\u5236\u901A\u77E5] \u6210\u5C31\u5DF2\u89E3\u9501\uFF0C\u5F3A\u5236\u663E\u793A\u901A\u77E5: " + definition.name);
          } else {
            console.log("\uD83D\uDD14 [\u5F3A\u5236\u901A\u77E5] \u6210\u5C31\u672A\u89E3\u9501\uFF0C\u6B63\u5E38\u663E\u793A\u901A\u77E5: " + definition.name);
          }

          // 强制调用通知显示
          this.handleAchievementUnlocked(achievementId);
        }

        /**
         * 调试用：强制重新检查好感度成就并显示通知
         * @param heroine 女主角
         * @param affectionValue 好感度值
         */;
        _proto.debugForceCheckAffectionAchievements = function debugForceCheckAffectionAchievements(heroine, affectionValue) {
          console.log("\uD83D\uDD14 [\u5F3A\u5236\u68C0\u67E5] \u5F3A\u5236\u68C0\u67E5 " + heroine + " \u7684\u597D\u611F\u5EA6\u6210\u5C31\uFF0C\u597D\u611F\u5EA6: " + affectionValue);
          if (!this.achievementData) {
            console.error('❌ [调试] AchievementData未初始化');
            return;
          }

          // 使用强制显示通知模式检查成就
          var unlockedAchievements = this.achievementData.checkAffectionAchievements(heroine, affectionValue, true);
          console.log("\uD83D\uDD14 [\u5F3A\u5236\u68C0\u67E5] \u627E\u5230 " + unlockedAchievements.length + " \u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u6210\u5C31");

          // 处理每个成就的通知
          for (var _iterator3 = _createForOfIteratorHelperLoose(unlockedAchievements), _step3; !(_step3 = _iterator3()).done;) {
            var achievementId = _step3.value;
            this.handleAchievementUnlocked(achievementId);
          }
        }

        /**
        * 调试用：快速测试已解锁成就的通知显示
        */;
        _proto.debugTestExistingAchievements = function debugTestExistingAchievements() {
          var _this2 = this;
          console.log('🧪 [测试] 测试所有已解锁成就的通知显示...');
          if (!this.achievementData) {
            console.error('❌ [调试] AchievementData未初始化');
            return;
          }
          var unlockedAchievements = this.achievementData.getUnlockedAchievements();
          console.log("\uD83D\uDD0D [\u6D4B\u8BD5] \u627E\u5230 " + unlockedAchievements.length + " \u4E2A\u5DF2\u89E3\u9501\u7684\u6210\u5C31");
          if (unlockedAchievements.length === 0) {
            console.log('💡 [提示] 没有已解锁的成就，请先解锁一些成就');
            return;
          }

          // 逐个显示通知，间隔2秒
          unlockedAchievements.forEach(function (progress, index) {
            setTimeout(function () {
              console.log("\uD83D\uDD14 [\u6D4B\u8BD5] \u663E\u793A\u7B2C " + (index + 1) + "/" + unlockedAchievements.length + " \u4E2A\u6210\u5C31\u901A\u77E5: " + progress.id);
              _this2.debugForceShowNotification(progress.id);
            }, index * 2000);
          });
        }

        /**
        * 调试用：完全重置所有成就数据（删除所有存储）
        */;
        _proto.debugCompletelyResetAllData = function debugCompletelyResetAllData() {
          console.log('🗑️ [GameAchievementManager] 开始完全重置所有成就数据...');
          if (!this.achievementData) {
            console.error('❌ [调试] AchievementData未初始化');
            return;
          }

          // 调用完全重置方法
          this.achievementData.completelyResetAllData();
          console.log('🎉 [GameAchievementManager] 所有成就数据已完全重置');
          console.log('💡 [提示] 现在可以重新解锁成就，通知将正常显示');
        }

        /**
         * 调试用：详细测试成就解锁流程
         */;
        _proto.debugTestAchievementFlow = function debugTestAchievementFlow() {
          console.log('🧪 [调试] 开始详细测试成就解锁流程...');

          // 1. 检查AchievementData状态
          console.log('1️⃣ 检查AchievementData状态:');
          if (!this.achievementData) {
            console.error('❌ AchievementData未初始化');
            return;
          }
          console.log('✅ AchievementData已初始化');

          // 2. 检查成就定义
          console.log('2️⃣ 检查成就定义:');
          var definitions = this.achievementData.getAllAchievementDefinitions();
          console.log("\uD83D\uDCCB \u5171\u6709" + definitions.length + "\u4E2A\u6210\u5C31\u5B9A\u4E49:");
          definitions.forEach(function (def) {
            console.log("   - " + def.id + ": " + def.name);
          });

          // 3. 检查成就进度
          console.log('3️⃣ 检查成就进度:');
          var progressList = this.achievementData.getAllAchievementProgress();
          console.log("\uD83D\uDCCA \u5171\u6709" + progressList.length + "\u4E2A\u6210\u5C31\u8FDB\u5EA6:");
          progressList.forEach(function (progress) {
            console.log("   - " + progress.id + ": \u89E3\u9501=" + progress.isUnlocked + ", \u8FDB\u5EA6=" + progress.currentProgress);
          });

          // 4. 检查通知管理器
          console.log('4️⃣ 检查通知管理器:');
          if (!this.notificationManager) {
            this.notificationManager = this.node.getComponent(AchievementNotificationManager);
            if (!this.notificationManager) {
              var scene = director.getScene();
              if (scene) {
                this.notificationManager = scene.getComponentInChildren(AchievementNotificationManager);
              }
            }
          }
          if (this.notificationManager) {
            console.log('✅ 找到AchievementNotificationManager');
            // 检查关键属性
            var hasPrefix = !!this.notificationManager['achievementNotificationPrefab'];
            var hasParent = !!this.notificationManager['notificationParent'];
            console.log("   - achievementNotificationPrefab: " + (hasPrefix ? '已设置' : '❌未设置'));
            console.log("   - notificationParent: " + (hasParent ? '已设置' : '❌未设置'));
          } else {
            console.error('❌ 未找到AchievementNotificationManager');
          }

          // 5. 模拟成就解锁
          console.log('5️⃣ 模拟成就解锁测试:');
          console.log('🔄 尝试触发林雅欣好感度满值成就...');
          this.onAffectionChanged(Heroine.LIN_YAXIN, 100, 0, true); // 强制显示通知

          console.log('🧪 [调试] 成就解锁流程测试完成');
        }

        /**
         * 调试用：检查本地存储状态
         */;
        _proto.debugCheckStorageState = function debugCheckStorageState() {
          console.log('💾 [调试] 检查本地存储状态:');

          // 检查start场景存储
          var startData = localStorage.getItem('achievement_data');
          console.log('🔍 Start场景存储 (achievement_data):', startData ? '存在' : '不存在');
          if (startData) {
            try {
              var parsed = JSON.parse(startData);
              console.log('   内容:', parsed);
            } catch (e) {
              console.log('   解析失败:', e);
            }
          }

          // 检查game场景存储
          var gameData = localStorage.getItem('game_achievements');
          console.log('🔍 Game场景存储 (game_achievements):', gameData ? '存在' : '不存在');
          if (gameData) {
            try {
              var _parsed = JSON.parse(gameData);
              console.log('   内容:', _parsed);
            } catch (e) {
              console.log('   解析失败:', e);
            }
          }
        };
        return GameAchievementManager;
      }(Component), _class2.instance = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameAchievementTracker.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameAchievementManager.ts', './AchievementData.ts'], function (exports) {
  var _inheritsLoose, _extends, cclegacy, _decorator, director, Component, GameAchievementManager, Heroine;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      GameAchievementManager = module.GameAchievementManager;
    }, function (module) {
      Heroine = module.Heroine;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "f0ba85IqthKHYHX+dfWbIMo", "GameAchievementTracker", undefined);
      var ccclass = _decorator.ccclass;

      /**
       * 女主角好感度数据结构
       */

      /**
       * 好感度变化追踪器
       * 用于监听和追踪女主角好感度的变化，并触发成就检测
       */
      var GameAchievementTracker = exports('GameAchievementTracker', (_dec = ccclass('GameAchievementTracker'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameAchievementTracker, _Component);
        function GameAchievementTracker() {
          var _this$currentAffectio;
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.achievementManager = null;
          // 当前好感度值
          _this.currentAffection = (_this$currentAffectio = {}, _this$currentAffectio[Heroine.LIN_YAXIN] = 0, _this$currentAffectio[Heroine.WANG_XIAOMENG] = 0, _this$currentAffectio[Heroine.CHEN_JINGYI] = 0, _this$currentAffectio);
          return _this;
        }
        var _proto = GameAchievementTracker.prototype;
        _proto.onLoad = function onLoad() {
          // 确保单例
          if (GameAchievementTracker.instance) {
            this.node.destroy();
            return;
          }
          GameAchievementTracker.instance = this;

          // 添加到常驻节点，防止场景切换时被销毁
          director.addPersistRootNode(this.node);
          console.log('📊 [GameAchievementTracker] 好感度追踪器已初始化');
        };
        _proto.start = function start() {
          // 获取成就管理器实例
          this.achievementManager = GameAchievementManager.getInstance();
          if (!this.achievementManager) {
            console.warn('⚠️ [GameAchievementTracker] 成就管理器未找到，请确保GameAchievementManager已初始化');
          }
        };
        _proto.onDestroy = function onDestroy() {
          if (GameAchievementTracker.instance === this) {
            GameAchievementTracker.instance = null;
          }
        }

        /**
         * 获取单例实例
         */;
        GameAchievementTracker.getInstance = function getInstance() {
          return GameAchievementTracker.instance;
        }

        /**
         * 更新女主角好感度
         * @param heroine 女主角
         * @param newValue 新的好感度值
         * @param silent 是否静默更新（不触发成就检测）
         * @param forceShowNotification 是否强制显示通知（即使成就已解锁）
         */;
        _proto.updateAffection = function updateAffection(heroine, newValue, silent, forceShowNotification) {
          var _this$currentAffectio2;
          if (silent === void 0) {
            silent = false;
          }
          if (forceShowNotification === void 0) {
            forceShowNotification = false;
          }
          // 确保当前好感度值存在，如果不存在则初始化为0
          var oldValue = (_this$currentAffectio2 = this.currentAffection[heroine]) != null ? _this$currentAffectio2 : 0;

          // 确保好感度值在合理范围内
          newValue = Math.max(0, Math.min(100, newValue));

          // 如果值没有变化但需要强制显示通知，仍然通知成就管理器
          if (oldValue === newValue && !forceShowNotification) {
            return;
          }

          // 更新当前值
          this.currentAffection[heroine] = newValue;

          // 如果不是静默更新，通知成就管理器
          if (!silent && this.achievementManager) {
            this.achievementManager.onAffectionChanged(heroine, newValue, oldValue, forceShowNotification);
          }
        }

        /**
         * 增加女主角好感度
         * @param heroine 女主角
         * @param delta 增加的好感度值
         */;
        _proto.addAffection = function addAffection(heroine, delta) {
          var _this$currentAffectio3;
          var currentValue = (_this$currentAffectio3 = this.currentAffection[heroine]) != null ? _this$currentAffectio3 : 0;
          var newValue = currentValue + delta;
          this.updateAffection(heroine, newValue);
        }

        /**
         * 减少女主角好感度
         * @param heroine 女主角
         * @param delta 减少的好感度值
         */;
        _proto.reduceAffection = function reduceAffection(heroine, delta) {
          var _this$currentAffectio4;
          var currentValue = (_this$currentAffectio4 = this.currentAffection[heroine]) != null ? _this$currentAffectio4 : 0;
          var newValue = currentValue - delta;
          this.updateAffection(heroine, newValue);
        }

        /**
         * 获取女主角当前好感度
         * @param heroine 女主角
         * @returns 当前好感度值
         */;
        _proto.getAffection = function getAffection(heroine) {
          var _this$currentAffectio5;
          return (_this$currentAffectio5 = this.currentAffection[heroine]) != null ? _this$currentAffectio5 : 0;
        }

        /**
         * 获取所有女主角的好感度
         * @returns 所有女主角的好感度对象
         */;
        _proto.getAllAffection = function getAllAffection() {
          return _extends({}, this.currentAffection); // 返回副本
        }

        /**
         * 设置女主角好感度（直接设置，不会触发变化事件）
         * @param heroine 女主角
         * @param value 好感度值
         */;
        _proto.setAffectionSilent = function setAffectionSilent(heroine, value) {
          this.updateAffection(heroine, value, true);
        }

        /**
         * 初始化所有女主角的好感度
         * @param affectionData 好感度数据
         */;
        _proto.initializeAffection = function initializeAffection(affectionData) {
          console.log('🎯 [GameAchievementTracker] 初始化好感度数据');
          for (var heroine in affectionData) {
            var value = affectionData[heroine];
            if (value !== undefined) {
              this.setAffectionSilent(heroine, value);
              console.log("  " + this.getHeroineName(heroine) + ": " + value);
            }
          }
        }

        /**
         * 重置所有好感度为0
         */;
        _proto.resetAllAffection = function resetAllAffection() {
          console.log('🔄 [GameAchievementTracker] 重置所有好感度');
          for (var heroine in this.currentAffection) {
            this.setAffectionSilent(heroine, 0);
          }
        }

        /**
         * 获取女主角中文名
         * @param heroine 女主角枚举
         * @returns 中文名
         */;
        _proto.getHeroineName = function getHeroineName(heroine) {
          var _names;
          var names = (_names = {}, _names[Heroine.LIN_YAXIN] = '林雅欣', _names[Heroine.WANG_XIAOMENG] = '王小萌', _names[Heroine.CHEN_JINGYI] = '陈静怡', _names);
          return names[heroine] || heroine;
        }

        /**
         * 输出当前好感度状态（调试用）
         */;
        _proto.debugLogAffectionStatus = function debugLogAffectionStatus() {
          console.log('💕 [好感度状态]:');
          for (var heroine in this.currentAffection) {
            var value = this.currentAffection[heroine];
            var name = this.getHeroineName(heroine);
            console.log("  " + name + ": " + value + "/100");
          }
        }

        /**
         * 模拟好感度变化（调试用）
         * @param heroine 女主角
         * @param targetValue 目标好感度值
         * @param step 每次变化的步长
         */;
        _proto.debugSimulateAffectionChange = function debugSimulateAffectionChange(heroine, targetValue, step) {
          var _this2 = this;
          if (step === void 0) {
            step = 5;
          }
          var currentValue = this.getAffection(heroine);
          var heroineName = this.getHeroineName(heroine);
          console.log("\uD83C\uDFAD [\u8C03\u8BD5] \u6A21\u62DF" + heroineName + "\u597D\u611F\u5EA6\u53D8\u5316: " + currentValue + " \u2192 " + targetValue);
          if (currentValue === targetValue) {
            console.log('已经是目标值，无需变化');
            return;
          }
          var isIncreasing = targetValue > currentValue;
          var actualStep = isIncreasing ? Math.abs(step) : -Math.abs(step);
          var current = currentValue;
          var interval = setInterval(function () {
            if (isIncreasing && current >= targetValue || !isIncreasing && current <= targetValue) {
              // 达到目标值
              _this2.updateAffection(heroine, targetValue);
              clearInterval(interval);
              console.log("\u2705 [\u8C03\u8BD5] " + heroineName + "\u597D\u611F\u5EA6\u53D8\u5316\u5B8C\u6210: " + targetValue);
              return;
            }
            current += actualStep;
            _this2.updateAffection(heroine, current);
          }, 500); // 每500ms变化一次
        };

        return GameAchievementTracker;
      }(Component), _class2.instance = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameConfig.ts", ['cc', './ProgressDisplay.ts'], function (exports) {
  var cclegacy, _decorator, find, ProgressDisplay;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      find = module.find;
    }, function (module) {
      ProgressDisplay = module.ProgressDisplay;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "9081c9ZJTlH14VPZhD5vG0+", "GameConfig", undefined);
      var ccclass = _decorator.ccclass;

      // 游戏状态枚举
      var GameState = exports('GameState', /*#__PURE__*/function (GameState) {
        GameState["MainMenu"] = "MainMenu";
        GameState["Playing"] = "Playing";
        GameState["ChoiceSelection"] = "ChoiceSelection";
        GameState["Ending"] = "Ending";
        GameState["Loading"] = "Loading";
        return GameState;
      }({}));

      // 角色接口

      // 选择效果接口

      // 选择接口

      // 剧情节点接口

      // 结局配置接口

      // 结局条件接口

      // UI配置接口

      var GameConfig = exports('GameConfig', (_dec = ccclass('GameConfig'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function GameConfig() {}
        // ===== 📊 进度显示相关方法 =====
        /**
         * 更新游戏进度显示
         * @param nodeId 当前剧情节点ID
         */
        GameConfig.updateProgressDisplay = function updateProgressDisplay(nodeId) {
          var progressNode = find('Canvas/UI/ProgressDisplay');
          if (progressNode) {
            var progressComponent = progressNode.getComponent(ProgressDisplay);
            if (progressComponent) {
              progressComponent.updateProgress(nodeId);
            }
          }
        }

        /**
         * 获取节点的章节信息
         * @param nodeId 剧情节点ID
         * @returns 章节信息
         */;
        GameConfig.getNodeChapterInfo = function getNodeChapterInfo(nodeId) {
          var node = this.STORY_NODES[nodeId];
          if (node) {
            var chapterNames = ['初来乍到', '社团生活', '校园祭典', '青春结局'];
            return {
              chapter: node.chapter,
              name: chapterNames[node.chapter - 1] || '未知章节'
            };
          }
          return {
            chapter: 1,
            name: '初来乍到'
          };
        };
        return GameConfig;
      }(), _class2.GAME_TITLE = "青春恋爱物语", _class2.GAME_VERSION = "1.0.0", _class2.SAVE_KEY = "romance_game_save_v1", _class2.AUTO_SAVE_INTERVAL = 30, _class2.STARTING_NODE = "start", _class2.CHARACTERS = {
        'yaxin': {
          id: 'yaxin',
          name: '林雅欣',
          favorability: 0,
          unlocked: false,
          avatar: 'images/avatars/yaxin.png',
          maxFavorability: 100,
          color: '#4A90E2' // 蓝色主题
        },

        'xiaomeng': {
          id: 'xiaomeng',
          name: '王小萌',
          favorability: 0,
          unlocked: false,
          avatar: 'images/avatars/xiaomeng.png',
          maxFavorability: 100,
          color: '#F5A623' // 橙色主题
        },

        'jingyi': {
          id: 'jingyi',
          name: '陈静怡',
          favorability: 0,
          unlocked: false,
          avatar: 'images/avatars/jingyi.png',
          maxFavorability: 100,
          color: '#7ED321' // 绿色主题
        }
      }, _class2.STORY_NODES = {
        // 🌅 第一章：初来乍到
        'start': {
          id: 'start',
          title: '新的开始',
          chapter: 1,
          video: 'video/chapter1/01-transfer-student',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'classroom',
          delay: 2
        },
        'classroom': {
          id: 'classroom',
          title: '走进教室',
          chapter: 1,
          video: 'video/chapter1/02-enter-classroom',
          choices: [{
            id: 'intro_confident',
            text: '自信地自我介绍',
            nextNode: 'introduce',
            effects: [{
              character: 'yaxin',
              favorability: 10
            }, {
              character: 'xiaomeng',
              favorability: 5
            }]
          }, {
            id: 'intro_quiet',
            text: '安静地坐下',
            nextNode: 'quiet',
            effects: [{
              character: 'jingyi',
              favorability: 10
            }]
          }, {
            id: 'intro_observe',
            text: '观察同学们',
            nextNode: 'observe',
            effects: [{
              character: 'yaxin',
              favorability: 5
            }, {
              character: 'xiaomeng',
              favorability: 5
            }, {
              character: 'jingyi',
              favorability: 5
            }]
          }]
        },
        'introduce': {
          id: 'introduce',
          title: '自我介绍',
          chapter: 1,
          video: 'video/chapter1/03-self-introduction',
          nextNode: 'math_class',
          setFlags: {
            'introduced_confidently': true
          }
        },
        'quiet': {
          id: 'quiet',
          title: '安静观察',
          chapter: 1,
          video: 'video/chapter1/04-sit-quietly',
          nextNode: 'math_class',
          setFlags: {
            'quiet_personality': true
          }
        },
        'observe': {
          id: 'observe',
          title: '观察同学',
          chapter: 1,
          video: 'video/chapter1/05-observe-students',
          nextNode: 'math_class',
          setFlags: {
            'observant_type': true
          }
        },
        'math_class': {
          id: 'math_class',
          title: '数学课',
          chapter: 1,
          video: 'video/chapter1/06-math-class',
          unlockCharacters: ['yaxin'],
          choices: [{
            id: 'help_yaxin',
            text: '主动帮助林雅欣解题',
            nextNode: 'help_yaxin',
            effects: [{
              character: 'yaxin',
              favorability: 25
            }]
          }, {
            id: 'watch_yaxin',
            text: '静静观察她思考',
            nextNode: 'watch_yaxin',
            effects: [{
              character: 'yaxin',
              favorability: 10
            }]
          }, {
            id: 'focus_study',
            text: '专心做自己的题',
            nextNode: 'focus_study',
            effects: [{
              character: 'yaxin',
              favorability: 5
            }]
          }, {
            id: 'interrupt_rudely',
            text: '大声指出她的错误',
            nextNode: 'interrupt_rudely',
            effects: [{
              character: 'yaxin',
              favorability: -15
            }, {
              character: 'jingyi',
              favorability: -10
            }]
          }]
        },
        'help_yaxin': {
          id: 'help_yaxin',
          title: '伸出援手',
          chapter: 1,
          video: 'video/chapter1/07-help-yaxin',
          nextNode: 'lunch_time',
          setFlags: {
            'helped_yaxin': true
          }
        },
        'watch_yaxin': {
          id: 'watch_yaxin',
          title: '默默关注',
          chapter: 1,
          video: 'video/chapter1/08-watch-yaxin',
          nextNode: 'lunch_time'
        },
        'focus_study': {
          id: 'focus_study',
          title: '专心学习',
          chapter: 1,
          video: 'video/chapter1/09-focus-study',
          nextNode: 'lunch_time',
          setFlags: {
            'studious_type': true
          }
        },
        'interrupt_rudely': {
          id: 'interrupt_rudely',
          title: '不合时宜的指正',
          chapter: 1,
          video: 'video/chapter1/10-interrupt-rudely',
          nextNode: 'lunch_time',
          setFlags: {
            'rude_behavior': true
          }
        },
        'lunch_time': {
          id: 'lunch_time',
          title: '午餐时间',
          chapter: 1,
          video: 'video/chapter1/10-lunch-time',
          choices: [{
            id: 'go_cafeteria',
            text: '去学校食堂',
            nextNode: 'cafeteria'
          }, {
            id: 'classroom_lunch',
            text: '在教室吃饭',
            nextNode: 'classroom_lunch',
            effects: [{
              character: 'yaxin',
              favorability: 15
            }],
            condition: 'helped_yaxin' // 需要之前帮助过雅欣
          }, {
            id: 'rooftop_lunch',
            text: '去天台吃饭',
            nextNode: 'rooftop'
          }]
        },
        'cafeteria': {
          id: 'cafeteria',
          title: '热闹的食堂',
          chapter: 1,
          video: 'video/chapter1/11-cafeteria',
          nextNode: 'chapter2_start'
        },
        'classroom_lunch': {
          id: 'classroom_lunch',
          title: '教室午餐',
          chapter: 1,
          video: 'video/chapter1/12-classroom-lunch',
          nextNode: 'chapter2_start',
          setFlags: {
            'lunch_with_yaxin': true
          }
        },
        'rooftop': {
          id: 'rooftop',
          title: '安静的天台',
          chapter: 1,
          video: 'video/chapter1/13-rooftop',
          nextNode: 'chapter2_start',
          setFlags: {
            'likes_solitude': true
          }
        },
        // 🎨 第二章：社团生活
        'chapter2_start': {
          id: 'chapter2_start',
          title: '社团招新',
          chapter: 2,
          video: 'video/chapter2/01-club-recruitment',
          bgm: 'audio/bgm/school-bgm',
          choices: [{
            id: 'visit_art_club',
            text: '参观艺术社',
            nextNode: 'art_club',
            effects: [{
              character: 'xiaomeng',
              favorability: 10
            }]
          }, {
            id: 'visit_library',
            text: '去图书馆看看',
            nextNode: 'library',
            effects: [{
              character: 'jingyi',
              favorability: 10
            }]
          }, {
            id: 'visit_sports',
            text: '看看体育社',
            nextNode: 'sports_club'
          }]
        },
        'art_club': {
          id: 'art_club',
          title: '邂逅艺术社',
          chapter: 2,
          video: 'video/chapter2/02-meet-xiaomeng',
          unlockCharacters: ['xiaomeng'],
          choices: [{
            id: 'join_art',
            text: '加入艺术社',
            nextNode: 'join_art',
            effects: [{
              character: 'xiaomeng',
              favorability: 30
            }]
          }, {
            id: 'praise_art',
            text: '夸赞她的画作',
            nextNode: 'praise_art',
            effects: [{
              character: 'xiaomeng',
              favorability: 20
            }]
          }, {
            id: 'criticize_art',
            text: '指出画作的不足',
            nextNode: 'criticize_art',
            effects: [{
              character: 'xiaomeng',
              favorability: -20
            }, {
              character: 'yaxin',
              favorability: -5
            }]
          }, {
            id: 'leave_politely',
            text: '礼貌地离开',
            nextNode: 'library'
          }]
        },
        'library': {
          id: 'library',
          title: '图书馆邂逅',
          chapter: 2,
          video: 'video/chapter2/03-meet-jingyi',
          bgm: 'audio/bgm/school-bgm',
          unlockCharacters: ['jingyi'],
          choices: [{
            id: 'help_organize',
            text: '帮助整理书籍',
            nextNode: 'help_books',
            effects: [{
              character: 'jingyi',
              favorability: 25
            }]
          }, {
            id: 'ask_recommendation',
            text: '询问推荐书籍',
            nextNode: 'ask_books',
            effects: [{
              character: 'jingyi',
              favorability: 20
            }]
          }, {
            id: 'read_quietly',
            text: '安静地阅读',
            nextNode: 'quiet_reading',
            effects: [{
              character: 'jingyi',
              favorability: 10
            }]
          }, {
            id: 'disturb_reading',
            text: '大声讨论学习问题',
            nextNode: 'disturb_reading',
            effects: [{
              character: 'jingyi',
              favorability: -25
            }, {
              character: 'xiaomeng',
              favorability: -10
            }]
          }]
        },
        // 🏃‍♂️ 体育社节点
        'sports_club': {
          id: 'sports_club',
          title: '活力体育社',
          chapter: 2,
          video: 'video/chapter2/06-sports-club',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'weekend_choice',
          delay: 2
        },
        // 🎨 艺术社相关节点
        'join_art': {
          id: 'join_art',
          title: '加入艺术社',
          chapter: 2,
          video: 'video/chapter2/04-join-art-club',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'weekend_choice',
          delay: 2
        },
        'praise_art': {
          id: 'praise_art',
          title: '赞美艺术',
          chapter: 2,
          video: 'video/chapter2/05-praise-artwork',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'weekend_choice',
          delay: 2
        },
        'criticize_art': {
          id: 'criticize_art',
          title: '尖锐的批评',
          chapter: 2,
          video: 'video/chapter2/06-criticize-artwork',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'weekend_choice',
          delay: 2,
          setFlags: {
            'criticized_xiaomeng': true
          }
        },
        // 📚 图书馆相关节点
        'help_books': {
          id: 'help_books',
          title: '帮助整理',
          chapter: 2,
          video: 'video/chapter2/07-help-organize',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'weekend_choice',
          delay: 2
        },
        'ask_books': {
          id: 'ask_books',
          title: '询问推荐',
          chapter: 2,
          video: 'video/chapter2/08-book-recommendation',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'weekend_choice',
          delay: 2
        },
        'quiet_reading': {
          id: 'quiet_reading',
          title: '安静阅读',
          chapter: 2,
          video: 'video/chapter2/09-peaceful-reading',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'weekend_choice',
          delay: 2
        },
        'disturb_reading': {
          id: 'disturb_reading',
          title: '打扰他人',
          chapter: 2,
          video: 'video/chapter2/10-disturb-library',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'weekend_choice',
          delay: 2,
          setFlags: {
            'disturbed_library': true
          }
        },
        // 📅 周末选择节点
        'weekend_choice': {
          id: 'weekend_choice',
          title: '周末计划',
          chapter: 2,
          video: 'video/chapter2/10-weekend-choice',
          bgm: 'audio/bgm/school-bgm',
          choices: [{
            id: 'date_yaxin',
            text: '邀请林雅欣去咖啡厅',
            nextNode: 'cafe_date_yaxin',
            effects: [{
              character: 'yaxin',
              favorability: 30
            }],
            requiredFavorability: [{
              character: 'yaxin',
              min: 30
            }]
          }, {
            id: 'date_xiaomeng',
            text: '和王小萌参观艺术展',
            nextNode: 'art_date_xiaomeng',
            effects: [{
              character: 'xiaomeng',
              favorability: 30
            }],
            requiredFavorability: [{
              character: 'xiaomeng',
              min: 30
            }]
          }, {
            id: 'date_jingyi',
            text: '陪陈静怡逛书店',
            nextNode: 'bookstore_date_jingyi',
            effects: [{
              character: 'jingyi',
              favorability: 30
            }],
            requiredFavorability: [{
              character: 'jingyi',
              min: 30
            }]
          }, {
            id: 'skip_plans',
            text: '临时取消所有计划',
            nextNode: 'cancel_plans',
            effects: [{
              character: 'yaxin',
              favorability: -10
            }, {
              character: 'xiaomeng',
              favorability: -10
            }, {
              character: 'jingyi',
              favorability: -10
            }]
          }]
        },
        'cancel_plans': {
          id: 'cancel_plans',
          title: '临时变卦',
          chapter: 2,
          video: 'video/chapter2/11-cancel-weekend-plans',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'chapter3_start',
          delay: 2,
          setFlags: {
            'cancelled_weekend': true
          }
        },
        // 💕 周末约会节点
        'cafe_date_yaxin': {
          id: 'cafe_date_yaxin',
          title: '咖啡厅约会',
          chapter: 2,
          video: 'video/chapter2/11-cafe-date-yaxin',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'chapter3_start',
          delay: 3
        },
        'art_date_xiaomeng': {
          id: 'art_date_xiaomeng',
          title: '艺术展约会',
          chapter: 2,
          video: 'video/chapter2/12-art-date-xiaomeng',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'chapter3_start',
          delay: 3
        },
        'bookstore_date_jingyi': {
          id: 'bookstore_date_jingyi',
          title: '书店约会',
          chapter: 2,
          video: 'video/chapter2/13-bookstore-date-jingyi',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'chapter3_start',
          delay: 3
        },
        // 🎆 第三章：校园祭典
        'chapter3_start': {
          id: 'chapter3_start',
          title: '校园祭典',
          chapter: 3,
          video: 'video/chapter3/01-school-festival',
          bgm: 'audio/bgm/school-bgm',
          choices: [{
            id: 'fireworks_with_yaxin',
            text: '和林雅欣看烟花',
            nextNode: 'fireworks_yaxin',
            effects: [{
              character: 'yaxin',
              favorability: 35
            }],
            requiredFavorability: [{
              character: 'yaxin',
              min: 40
            }]
          }, {
            id: 'exhibition_with_xiaomeng',
            text: '参观王小萌的画展',
            nextNode: 'exhibition_xiaomeng',
            effects: [{
              character: 'xiaomeng',
              favorability: 35
            }],
            requiredFavorability: [{
              character: 'xiaomeng',
              min: 40
            }]
          }, {
            id: 'chat_with_jingyi',
            text: '在图书角和陈静怡聊天',
            nextNode: 'chat_jingyi',
            effects: [{
              character: 'jingyi',
              favorability: 35
            }],
            requiredFavorability: [{
              character: 'jingyi',
              min: 40
            }]
          }, {
            id: 'leave_festival',
            text: '一个人提前离开祭典',
            nextNode: 'leave_early',
            effects: [{
              character: 'yaxin',
              favorability: -20
            }, {
              character: 'xiaomeng',
              favorability: -20
            }, {
              character: 'jingyi',
              favorability: -20
            }]
          }]
        },
        // 💕 第三章角色互动节点
        'fireworks_yaxin': {
          id: 'fireworks_yaxin',
          title: '烟花之约',
          chapter: 3,
          video: 'video/chapter3/02-fireworks-yaxin',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'confession_choice',
          delay: 3
        },
        'exhibition_xiaomeng': {
          id: 'exhibition_xiaomeng',
          title: '艺术展览',
          chapter: 3,
          video: 'video/chapter3/03-exhibition-xiaomeng',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'confession_choice',
          delay: 3
        },
        'chat_jingyi': {
          id: 'chat_jingyi',
          title: '图书角谈心',
          chapter: 3,
          video: 'video/chapter3/04-chat-jingyi',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'confession_choice',
          delay: 3
        },
        'leave_early': {
          id: 'leave_early',
          title: '独自离去',
          chapter: 3,
          video: 'video/chapter3/05-leave-festival-early',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'confession_choice',
          delay: 2,
          setFlags: {
            'left_festival_early': true
          }
        },
        // 💝 告白选择节点
        'confession_choice': {
          id: 'confession_choice',
          title: '告白时刻',
          chapter: 3,
          video: 'video/chapter3/05-confession-choice',
          bgm: 'audio/bgm/school-bgm',
          choices: [{
            id: 'confess_to_yaxin',
            text: '向林雅欣告白',
            nextNode: 'confess_yaxin',
            effects: [{
              character: 'yaxin',
              favorability: 50
            }],
            requiredFavorability: [{
              character: 'yaxin',
              min: 60
            }]
          }, {
            id: 'confess_to_xiaomeng',
            text: '向王小萌告白',
            nextNode: 'confess_xiaomeng',
            effects: [{
              character: 'xiaomeng',
              favorability: 50
            }],
            requiredFavorability: [{
              character: 'xiaomeng',
              min: 60
            }]
          }, {
            id: 'confess_to_jingyi',
            text: '向陈静怡告白',
            nextNode: 'confess_jingyi',
            effects: [{
              character: 'jingyi',
              favorability: 50
            }],
            requiredFavorability: [{
              character: 'jingyi',
              min: 60
            }]
          }, {
            id: 'wait_and_see',
            text: '再等等看',
            nextNode: 'wait_and_see',
            effects: [{
              character: 'yaxin',
              favorability: 10
            }, {
              character: 'xiaomeng',
              favorability: 10
            }, {
              character: 'jingyi',
              favorability: 10
            }]
          }, {
            id: 'avoid_decision',
            text: '回避这个话题',
            nextNode: 'avoid_confession',
            effects: [{
              character: 'yaxin',
              favorability: -15
            }, {
              character: 'xiaomeng',
              favorability: -15
            }, {
              character: 'jingyi',
              favorability: -15
            }]
          }]
        },
        // 💞 告白结果节点
        'confess_yaxin': {
          id: 'confess_yaxin',
          title: '雅欣的回应',
          chapter: 3,
          video: 'video/chapter3/06-confess-yaxin',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'graduation',
          delay: 3
        },
        'confess_xiaomeng': {
          id: 'confess_xiaomeng',
          title: '小萌的回应',
          chapter: 3,
          video: 'video/chapter3/07-confess-xiaomeng',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'graduation',
          delay: 3
        },
        'confess_jingyi': {
          id: 'confess_jingyi',
          title: '静怡的回应',
          chapter: 3,
          video: 'video/chapter3/08-confess-jingyi',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'graduation',
          delay: 3
        },
        'wait_and_see': {
          id: 'wait_and_see',
          title: '等待时机',
          chapter: 3,
          video: 'video/chapter3/09-wait-and-see',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'graduation',
          delay: 3
        },
        'avoid_confession': {
          id: 'avoid_confession',
          title: '逃避现实',
          chapter: 3,
          video: 'video/chapter3/10-avoid-confession',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'graduation',
          delay: 3,
          setFlags: {
            'avoided_confession': true
          }
        },
        // 🎓 第四章：结局
        'graduation': {
          id: 'graduation',
          title: '毕业典礼',
          chapter: 4,
          video: 'video/chapter4/01-graduation',
          bgm: 'audio/bgm/school-bgm',
          autoNext: true,
          nextNode: 'ending_calculator',
          delay: 3
        },
        'ending_calculator': {
          id: 'ending_calculator',
          title: '结局计算',
          chapter: 4,
          video: 'video/chapter4/02-ending-transition',
          autoNext: true,
          nextNode: '',
          // 动态计算
          delay: 1
        }
      }, _class2.ENDINGS = {
        'ending_yaxin_good': {
          id: 'ending_yaxin_good',
          title: '知性恋人',
          description: '你和林雅欣一起考上了同一所大学，在知识的海洋中相伴前行...',
          video: 'video/chapter4/ending-yaxin-good',
          condition: {
            type: 'favorability',
            favorability: {
              'yaxin': 70
            }
          }
        },
        'ending_xiaomeng_good': {
          id: 'ending_xiaomeng_good',
          title: '艺术伴侣',
          description: '你和王小萌一起追求艺术梦想，用创意点亮彼此的人生...',
          video: 'video/chapter4/ending-xiaomeng-good',
          condition: {
            type: 'favorability',
            favorability: {
              'xiaomeng': 70
            }
          }
        },
        'ending_jingyi_good': {
          id: 'ending_jingyi_good',
          title: '心灵伴侣',
          description: '你和陈静怡在书香中找到了心灵的归宿，一起沉浸在知识的世界里...',
          video: 'video/chapter4/ending-jingyi-good',
          condition: {
            type: 'favorability',
            favorability: {
              'jingyi': 70
            }
          }
        },
        'ending_alone': {
          id: 'ending_alone',
          title: '独自前行',
          description: '虽然没有找到恋人，但你收获了珍贵的友谊和成长，相信未来会更好...',
          video: 'video/chapter4/ending-alone',
          condition: {
            type: 'favorability',
            minFavorability: 30
          }
        },
        'ending_harem': {
          id: 'ending_harem',
          title: '被美女包围',
          description: '完蛋！你被美女包围了！三个女孩都对你有好感，这可怎么办呢？',
          video: 'video/chapter4/ending-harem',
          condition: {
            type: 'combination',
            favorability: {
              'yaxin': 80,
              'xiaomeng': 80,
              'jingyi': 80
            }
          },
          isSecret: true
        }
      }, _class2.AUDIO_CONFIG = {
        bgmVolume: 0.6,
        sfxVolume: 0.8,
        fadeTime: 1.0,
        bgmLoop: true,
        // 音效映射
        soundEffects: {
          'ui_click': 'audio/sfx/ui-click',
          'favorability_up': 'audio/sfx/favorability-change'
        }
      }, _class2.UI_CONFIG = {
        colors: {
          primary: '#4A90E2',
          secondary: '#7B68EE',
          success: '#5CB85C',
          warning: '#F0AD4E',
          danger: '#D9534F',
          background: 'rgba(0, 0, 0, 0.7)',
          text: '#FFFFFF'
        },
        fonts: {
          title: 'Arial',
          content: 'Arial',
          ui: 'Arial'
        },
        animations: {
          fadeInDuration: 0.3,
          fadeOutDuration: 0.2,
          scaleInDuration: 0.25
        }
      }, _class2.GAME_MECHANICS = {
        // 好感度设置
        maxFavorability: 100,
        favorabilityDecayRate: 0,
        // 每天衰减值（0=不衰减）

        // 存档设置
        maxSaveSlots: 3,
        autoSaveEnabled: true,
        // 视频设置
        allowSkip: true,
        skipConfirmation: false,
        videoFadeTime: 0.5,
        // 选择设置
        choiceTimeout: 0,
        // 选择超时时间（0=无限时）
        showFavorabilityChanges: true,
        // 解锁设置
        showLockedChoices: false,
        // 是否显示被锁定的选择
        unlockHints: true // 是否显示解锁提示
      }, _class2.DEV_CONFIG = {
        debugMode: true,
        showFPS: false,
        logLevel: 'info',
        // 'debug', 'info', 'warn', 'error'
        enableCheatCodes: true,
        skipIntro: false,
        // 测试设置
        testMode: false,
        godMode: false,
        // 无限好感度
        unlockAllEndings: false
      }, _class2.LOCALIZATION = {
        'zh-CN': {
          // UI文本
          'ui.start': '开始游戏',
          'ui.load': '加载游戏',
          'ui.save': '保存游戏',
          'ui.settings': '设置',
          'ui.skip': '跳过',
          'ui.menu': '主菜单',
          'ui.back': '返回',
          'ui.confirm': '确认',
          'ui.cancel': '取消',
          // 游戏状态
          'game.loading': '加载中...',
          'game.saving': '保存中...',
          'game.saved': '游戏已保存',
          'game.loaded': '游戏已加载',
          // 角色相关
          'character.favorability': '好感度',
          'character.unlocked': '已解锁',
          'character.locked': '未解锁',
          // 结局相关
          'ending.title': '结局：',
          'ending.description': '描述：',
          'ending.replay': '重新游戏',
          // 章节标题
          'chapter.1': '第一章：初来乍到',
          'chapter.2': '第二章：社团生活',
          'chapter.3': '第三章：校园祭典',
          'chapter.4': '第四章：青春结局'
        }
      }, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameConfig.ts', './SaveManager.ts', './SaveUIManager.ts', './SceneManager.ts', './VolumeManager.ts', './GameAchievementIntegration.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, VideoPlayer, AudioSource, Node, Label, ProgressBar, Button, resources, VideoClip, AudioClip, director, Component, GameState, GameConfig, SaveManager, SaveUIManager, SceneManager, VolumeManager, GameAchievementIntegration;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      VideoPlayer = module.VideoPlayer;
      AudioSource = module.AudioSource;
      Node = module.Node;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      Button = module.Button;
      resources = module.resources;
      VideoClip = module.VideoClip;
      AudioClip = module.AudioClip;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      GameState = module.GameState;
      GameConfig = module.GameConfig;
    }, function (module) {
      SaveManager = module.SaveManager;
    }, function (module) {
      SaveUIManager = module.SaveUIManager;
    }, function (module) {
      SceneManager = module.SceneManager;
    }, function (module) {
      VolumeManager = module.VolumeManager;
    }, function (module) {
      GameAchievementIntegration = module.GameAchievementIntegration;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32;
      cclegacy._RF.push({}, "e055atA0mJDz7gf8Sb7hOt1", "GameController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameController = exports('GameController', (_dec = ccclass('GameController'), _dec2 = property(VideoPlayer), _dec3 = property(AudioSource), _dec4 = property(AudioSource), _dec5 = property(AudioSource), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(ProgressBar), _dec11 = property(ProgressBar), _dec12 = property(ProgressBar), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Button), _dec17 = property(Button), _dec18 = property(Button), _dec19 = property(Button), _dec20 = property(Button), _dec21 = property(SaveUIManager), _dec22 = property(Button), _dec23 = property(Button), _dec24 = property(Node), _dec25 = property(Button), _dec26 = property(Button), _dec27 = property(Button), _dec28 = property(Button), _dec29 = property(Button), _dec30 = property(Label), _dec31 = property(Label), _dec32 = property(Label), _dec33 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameController, _Component);
        function GameController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // 🎮 核心组件
          _initializerDefineProperty(_this, "videoPlayer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgmSource", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfxSource", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "favorabilityAudioSource", _descriptor4, _assertThisInitialized(_this));
          // 专门用于播放好感度音效
          // 📱 UI面板
          _initializerDefineProperty(_this, "gamePanel", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "choicePanel", _descriptor6, _assertThisInitialized(_this));
          // 📊 进度和结局显示组件
          _initializerDefineProperty(_this, "progressLabel", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "endingLabel", _descriptor8, _assertThisInitialized(_this));
          // 👥 角色好感度显示
          _initializerDefineProperty(_this, "yaxinBar", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xiaomengBar", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jingyiBar", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yaxinName", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xiaomengName", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jingyiName", _descriptor14, _assertThisInitialized(_this));
          // 🎮 游戏控制按钮
          _initializerDefineProperty(_this, "skipButton", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "menuButton", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "restartButton", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pauseResumeButton", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "speedControlButton", _descriptor19, _assertThisInitialized(_this));
          // 💾 存档UI管理器
          _initializerDefineProperty(_this, "saveUIManager", _descriptor20, _assertThisInitialized(_this));
          // 💾 存档面板控制
          _initializerDefineProperty(_this, "openSavePanelButton1", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openSavePanelButton2", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "savePanel", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeSavePanelButton", _descriptor24, _assertThisInitialized(_this));
          // 💭 选择按钮
          _initializerDefineProperty(_this, "choice1Button", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "choice2Button", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "choice3Button", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "choice4Button", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "choice1Label", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "choice2Label", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "choice3Label", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "choice4Label", _descriptor32, _assertThisInitialized(_this));
          // 🎯 游戏状态
          _this.gameState = GameState.Playing;
          // 🏆 成就系统
          _this.achievementSystem = null;
          _this.currentNode = '';
          _this.currentChapter = 1;
          _this.isVideoPaused = false;
          _this.currentPlaybackRate = 1.0;
          _this.playbackRates = [1.0, 1.25, 1.5, 2.0];
          _this.playbackRateIndex = 0;
          // 👥 角色数据
          _this.characters = {};
          // 🚩 游戏标记
          _this.gameFlags = {};
          // 📊 当前选择数据
          _this.currentChoices = [];
          // 🔊 预加载的音效资源
          _this.preloadedAudioClips = {};
          return _this;
        }
        var _proto = GameController.prototype;
        _proto.onLoad = function onLoad() {
          console.log('🚀 GameController onLoad 开始');
          this.initializeGame();
          this.bindButtonEvents();
          this.hideEndingLabel();
          this.hideAllChoiceButtons();
          SaveManager.initialize();

          // 初始化存档UI管理器
          if (this.saveUIManager) {
            this.saveUIManager.setGameController(this);
            console.log('✅ SaveUIManager 已连接到 GameController');
          } else {
            console.warn('⚠️ SaveUIManager 未在 Inspector 中绑定');
          }
          this.initializeSavePanel();
          this.preloadAudioResources();
          this.testBGMSystem();

          // 初始化成就系统
          this.initializeAchievementSystem();
          console.log('✅ GameController onLoad 完成');
        };
        _proto.start = function start() {
          var _this2 = this;
          console.log('🚀 GameController start 方法执行');

          // 🔊 应用保存的音量设置
          this.applyVolumeSettings();
          console.log('🎮 准备显示游戏面板');

          // 直接显示游戏面板（不显示主菜单）
          this.showGamePanel();

          // 添加组件状态检查
          this.scheduleOnce(function () {
            _this2.checkComponentStatus();
          }, 0.2);

          // 检查是否有临时存档数据（从start场景传递过来）
          var tempSaveData = SceneManager.getTempSaveData();
          if (tempSaveData) {
            console.log('📂 检测到临时存档数据，加载存档游戏');
            this.scheduleOnce(function () {
              _this2.loadFromSaveData(tempSaveData);
              SceneManager.clearTempSaveData(); // 清除临时数据
            }, 0.5);
          } else {
            console.log('🆕 没有临时存档数据，开始新游戏');
            // 延迟启动游戏，确保所有组件都已初始化
            this.scheduleOnce(function () {
              console.log('🎮 延迟启动新游戏');
              _this2.startNewGame();
            }, 0.5);
          }
          console.log('✅ 游戏场景初始化完成');
        }

        /**
         * 🔊 应用保存的音量设置
         */;
        _proto.applyVolumeSettings = function applyVolumeSettings() {
          console.log('🔊 开始应用游戏控制器音量设置...');

          // 应用音量到AudioSource和VideoPlayer组件
          VolumeManager.applyAllVolumes(this.bgmSource, this.sfxSource, this.videoPlayer);

          // 打印当前音量设置
          VolumeManager.logCurrentVolumes();
          console.log('✅ 游戏控制器音量设置应用完成');
        };
        _proto.initializeGame = function initializeGame() {
          console.log('🎯 开始初始化游戏');

          // 从配置文件初始化角色数据
          this.characters = JSON.parse(JSON.stringify(GameConfig.CHARACTERS));

          // 设置音频音量 - 使用 VolumeManager 而不是硬编码值
          if (this.bgmSource) {
            // 应用保存的BGM音量
            VolumeManager.applyBgmVolume(this.bgmSource);
            this.bgmSource.loop = GameConfig.AUDIO_CONFIG.bgmLoop;
            console.log("\u2705 [BGM_INIT] BGM\u6E90\u5DF2\u7ED1\u5B9A - \u97F3\u91CF: " + this.bgmSource.volume + ", \u5FAA\u73AF: " + this.bgmSource.loop);
          } else {
            console.log("\u274C [BGM_INIT] BGM\u6E90\u672A\u7ED1\u5B9A\uFF01\u8BF7\u5728Inspector\u4E2D\u4E3AGameController\u7ED1\u5B9ABGMSource\u7EC4\u4EF6");
          }
          if (this.sfxSource) {
            // 应用保存的SFX音量
            VolumeManager.applySfxVolume(this.sfxSource);
            console.log("\u2705 [SFX_INIT] \u97F3\u6548\u6E90\u5DF2\u7ED1\u5B9A - \u97F3\u91CF: " + this.sfxSource.volume);
          } else {
            console.log("\u274C [SFX_INIT] \u97F3\u6548\u6E90\u672A\u7ED1\u5B9A\uFF01\u8BF7\u5728Inspector\u4E2D\u4E3AGameController\u7ED1\u5B9ASFXSource\u7EC4\u4EF6");
          }

          // 更新角色名称显示
          this.updateCharacterNames();
          console.log('✅ 游戏初始化完成');
        };
        _proto.bindButtonEvents = function bindButtonEvents() {
          var _this3 = this;
          console.log('🔧 开始绑定按钮事件');

          // 游戏控制按钮事件
          if (this.skipButton) {
            this.skipButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.skipVideo();
            }, this);
          }

          // 重新开始按钮
          if (this.restartButton) {
            this.restartButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.restartGame();
            }, this);
          }

          // 手动启动游戏按钮（调试用）
          if (this.menuButton) {
            // 长按菜单按钮可以手动启动游戏
            var longPressTimer = null;
            this.menuButton.node.on('touchstart', function () {
              longPressTimer = setTimeout(function () {
                console.log('🔧 长按菜单按钮，手动启动游戏');
                _this3.startNewGame();
              }, 2000); // 长按2秒
            }, this);
            this.menuButton.node.on('touchend', function () {
              if (longPressTimer) {
                clearTimeout(longPressTimer);
                longPressTimer = null;
              }
            }, this);
            this.menuButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.returnToStartScene();
            }, this);
          }

          // 暂停/恢复按钮
          if (this.pauseResumeButton) {
            this.pauseResumeButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.toggleVideoPause();
            }, this);
          }
          if (this.speedControlButton) {
            this.speedControlButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.togglePlaybackSpeed();
            }, this);
          }

          // 存档面板按钮事件
          if (this.openSavePanelButton1) {
            this.openSavePanelButton1.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.openSavePanel();
            }, this);
          }
          if (this.openSavePanelButton2) {
            this.openSavePanelButton2.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.openSavePanel();
            }, this);
          }
          if (this.closeSavePanelButton) {
            this.closeSavePanelButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.closeSavePanel();
            }, this);
          }

          // 选择按钮事件
          if (this.choice1Button) {
            this.choice1Button.node.on('click', function () {
              _this3.playSound('choice_select');
              _this3.selectChoice(0);
            }, this);
          }
          if (this.choice2Button) {
            this.choice2Button.node.on('click', function () {
              _this3.playSound('choice_select');
              _this3.selectChoice(1);
            }, this);
          }
          if (this.choice3Button) {
            this.choice3Button.node.on('click', function () {
              _this3.playSound('choice_select');
              _this3.selectChoice(2);
            }, this);
          }
          if (this.choice4Button) {
            this.choice4Button.node.on('click', function () {
              _this3.playSound('choice_select');
              _this3.selectChoice(3);
            }, this);
          }

          // 结局Label点击事件
          if (this.endingLabel) {
            this.endingLabel.node.on('click', this.onEndingLabelClick, this);
          }
          console.log('✅ 按钮事件绑定完成');
        };
        _proto.returnToStartScene = function returnToStartScene() {
          console.log('🏠 返回开始场景');
          SceneManager.returnToStartScene();
        };
        _proto.startNewGame = function startNewGame() {
          console.log('🎮 开始新游戏');
          // 移除自动播放音效，因为这不是用户主动点击按钮
          this.currentChapter = 1;
          this.currentNode = GameConfig.STARTING_NODE;

          // 重置存档计时器
          SaveManager.resetGameTimer();

          // 重置播放倍速为1.0x
          this.resetPlaybackSpeed();

          // 播放默认BGM
          this.playBGM('audio/bgm/school-bgm');
          this.showGamePanel();
          this.playStoryNode(this.currentNode);
          console.log('✅ 新游戏已开始');
        };
        _proto.playStoryNode = function playStoryNode(nodeId) {
          console.log("\uD83C\uDFAD \u64AD\u653E\u5267\u60C5\u8282\u70B9: " + nodeId);

          // 检查是否是结局节点
          if (nodeId.indexOf('ending_') === 0 && GameConfig.ENDINGS[nodeId]) {
            this.playEndingNode(nodeId);
            return;
          }
          var node = GameConfig.STORY_NODES[nodeId];
          if (!node) {
            console.log("\u274C \u672A\u627E\u5230\u5267\u60C5\u8282\u70B9: " + nodeId);
            console.log("\uD83D\uDCA1 \u53EF\u7528\u7684\u5267\u60C5\u8282\u70B9: " + Object.keys(GameConfig.STORY_NODES).join(', '));
            return;
          }
          this.currentNode = nodeId;

          // 更新当前章节
          if (node.chapter !== this.currentChapter) {
            this.currentChapter = node.chapter;
            console.log("\uD83D\uDCC8 \u7AE0\u8282\u66F4\u65B0: \u7B2C" + this.currentChapter + "\u7AE0");
          }
          console.log("\u2705 \u627E\u5230\u5267\u60C5\u8282\u70B9: " + nodeId + " - " + node.title);
          console.log("\uD83D\uDCDD \u8282\u70B9\u4FE1\u606F: \u7AE0\u8282" + node.chapter + ", \u89C6\u9891: " + (node.video || '无') + ", BGM: " + (node.bgm || '无'));

          // 更新进度显示
          if (this.progressLabel) {
            this.progressLabel.string = "\u5F53\u524D\u7AE0\u8282: " + node.chapter + " - " + node.title;
            console.log("\uD83D\uDCCA \u5DF2\u66F4\u65B0\u8FDB\u5EA6\u663E\u793A: \u7B2C" + node.chapter + "\u7AE0 - " + node.title);
          }

          // 播放BGM
          if (node.bgm) {
            this.playBGM(node.bgm);
          }

          // 播放视频
          if (node.video) {
            console.log("\uD83C\uDFAC \u51C6\u5907\u64AD\u653E\u89C6\u9891: " + node.video);
            this.playVideo(node.video);
          } else {
            console.log("\u23ED\uFE0F \u8BE5\u8282\u70B9\u65E0\u89C6\u9891\uFF0C\u76F4\u63A5\u8FDB\u5165\u4E0B\u4E00\u6B65");
            this.onVideoFinished();
          }
        };
        _proto.playVideo = function playVideo(videoPath) {
          var _this4 = this;
          console.log("\uD83C\uDFAC \u5C1D\u8BD5\u64AD\u653E\u89C6\u9891: " + videoPath);
          if (!this.videoPlayer) {
            console.log('❌ 错误：VideoPlayer组件未设置！请在Inspector中绑定VideoPlayer组件。');
            return;
          }
          console.log("\u2705 VideoPlayer\u7EC4\u4EF6\u5DF2\u8BBE\u7F6E");
          console.log("\uD83D\uDCC2 \u52A0\u8F7D\u89C6\u9891\u8D44\u6E90: " + videoPath);
          resources.load(videoPath, VideoClip, function (err, videoClip) {
            if (err) {
              console.log("\u274C \u89C6\u9891\u52A0\u8F7D\u5931\u8D25: " + videoPath);
              console.log("\u9519\u8BEF\u8BE6\u60C5: " + err.message);
              console.log("\uD83D\uDCA1 \u5EFA\u8BAE\u68C0\u67E5\uFF1A1) \u6587\u4EF6\u662F\u5426\u5B58\u5728 2) \u8DEF\u5F84\u662F\u5426\u6B63\u786E 3) \u6587\u4EF6\u683C\u5F0F\u662F\u5426\u4E3AMP4");
              _this4.onVideoFinished();
              return;
            }
            console.log("\u2705 \u89C6\u9891\u52A0\u8F7D\u6210\u529F: " + videoPath);
            _this4.videoPlayer.clip = videoClip;

            // 确保视频节点显示
            _this4.videoPlayer.node.active = true;

            // 重置暂停状态和按钮
            _this4.isVideoPaused = false;
            _this4.updatePauseButtonText('暂停');
            _this4.setSkipButtonEnabled(true);

            // 应用当前保存的播放倍速
            _this4.applyCurrentPlaybackSpeed();

            // 应用视频音量设置
            VolumeManager.applyVideoVolume(_this4.videoPlayer);
            console.log("\uD83C\uDFAE VideoPlayer\u72B6\u6001: \u5C31\u7EEA");
            console.log("\u25B6\uFE0F \u5F00\u59CB\u64AD\u653E\u89C6\u9891...");
            _this4.videoPlayer.play();

            // 监听视频结束事件
            _this4.videoPlayer.node.once(VideoPlayer.EventType.COMPLETED, _this4.onVideoFinished, _this4);
            console.log("\uD83C\uDFAC \u89C6\u9891\u64AD\u653E\u4E2D: " + videoPath);
          });
        };
        _proto.onVideoFinished = function onVideoFinished() {
          var _this5 = this;
          console.log("\uD83C\uDFAC \u89C6\u9891\u64AD\u653E\u5B8C\u6210\uFF0C\u5F53\u524D\u8282\u70B9: " + this.currentNode);

          // 检查是否是结局节点
          if (this.currentNode.indexOf('ending_') === 0 && GameConfig.ENDINGS[this.currentNode]) {
            console.log("\uD83C\uDFC6 \u7ED3\u5C40\u89C6\u9891\u64AD\u653E\u5B8C\u6210\uFF0C\u5F00\u59CB\u7ED3\u5C40\u7ED3\u7B97");
            this.handleGameEnd();
            return;
          }
          var currentNode = GameConfig.STORY_NODES[this.currentNode];
          if (!currentNode) {
            console.log("\u274C \u5F53\u524D\u8282\u70B9\u4E0D\u5B58\u5728: " + this.currentNode);
            return;
          }
          console.log("\uD83D\uDCDD \u5F53\u524D\u8282\u70B9\u4FE1\u606F: " + currentNode.title + " (\u7AE0\u8282" + currentNode.chapter + ")");

          // 设置游戏标记
          if (currentNode.setFlags) {
            console.log("\uD83D\uDEA9 \u8BBE\u7F6E\u6E38\u620F\u6807\u8BB0: " + JSON.stringify(currentNode.setFlags));
            for (var flag in currentNode.setFlags) {
              this.gameFlags[flag] = currentNode.setFlags[flag];
            }
          }

          // 检查是否有选择
          if (currentNode.choices && currentNode.choices.length > 0) {
            console.log("\uD83D\uDCAD \u53D1\u73B0" + currentNode.choices.length + "\u4E2A\u9009\u62E9\u9879");
            for (var i = 0; i < currentNode.choices.length; i++) {
              console.log("   \u9009\u62E9" + (i + 1) + ": " + currentNode.choices[i].text + " -> " + currentNode.choices[i].nextNode);
            }
            this.showChoicePanel(currentNode.choices);
          } else {
            console.log("\u23ED\uFE0F \u6CA1\u6709\u9009\u62E9\u9879\uFF0C\u68C0\u67E5\u81EA\u52A8\u8DF3\u8F6C");
            if (currentNode.autoNext && currentNode.nextNode) {
              var delay = currentNode.delay || 1;
              console.log("\uFFFD\uFFFD autoNext=true\uFF0C\u5C06\u5728" + delay + "\u79D2\u540E\u81EA\u52A8\u8DF3\u8F6C\u5230: " + currentNode.nextNode);
              this.scheduleOnce(function () {
                _this5.playStoryNode(currentNode.nextNode);
              }, delay);
            } else if (currentNode.nextNode && !currentNode.autoNext) {
              console.log("\uD83D\uDD04 \u6CA1\u6709autoNext\u6807\u8BB0\uFF0C\u5C06\u57281\u79D2\u540E\u81EA\u52A8\u8DF3\u8F6C\u5230: " + currentNode.nextNode);
              this.scheduleOnce(function () {
                _this5.playStoryNode(currentNode.nextNode);
              }, 1);
            } else if (currentNode.autoNext && !currentNode.nextNode && this.currentNode === 'ending_calculator') {
              console.log("\uD83C\uDFB2 \u7ED3\u5C40\u8BA1\u7B97\u5668\uFF1A\u5F00\u59CB\u8BA1\u7B97\u6700\u7EC8\u7ED3\u5C40...");
              var finalEndingNode = this.calculateFinalEnding();
              var _delay = currentNode.delay || 1;
              console.log("\uD83C\uDF8A \u8BA1\u7B97\u5F97\u51FA\u7ED3\u5C40: " + finalEndingNode + "\uFF0C\u5C06\u5728" + _delay + "\u79D2\u540E\u8DF3\u8F6C");
              this.scheduleOnce(function () {
                _this5.playStoryNode(finalEndingNode);
              }, _delay);
            } else {
              console.log("\uD83C\uDFC1 \u6CA1\u6709\u4E0B\u4E00\u4E2A\u8282\u70B9\u6216autoNext=false\uFF0C\u6E38\u620F\u7ED3\u675F");
              this.handleGameEnd();
            }
          }
          console.log('✅ 视频播放完成处理结束');
        }

        // 其他必要的方法（简化版本）
        ;

        _proto.showGamePanel = function showGamePanel() {
          console.log('📱 显示游戏面板');
          this.hideAllPanels();
          this.hideEndingLabel();
          if (this.gamePanel) {
            this.gamePanel.active = true;
          }
          if (this.restartButton) {
            this.restartButton.node.active = false;
          }
          if (this.saveUIManager) {
            this.saveUIManager.setSaveButtonsEnabled(true);
          }
          this.updateCharacterDisplay();
          this.gameState = GameState.Playing;
          console.log('✅ 游戏界面已显示');
        };
        _proto.hideAllPanels = function hideAllPanels() {
          if (this.gamePanel) this.gamePanel.active = false;
          if (this.choicePanel) {
            this.choicePanel.active = false;

            // ✅ 修复：隐藏选择界面时，重新显示跳过和暂停按钮
            if (this.skipButton) {
              this.skipButton.node.active = true;
              console.log('⏭️ 重新显示跳过按钮');
            }
            if (this.pauseResumeButton) {
              this.pauseResumeButton.node.active = true;
              console.log('⏸️ 重新显示暂停按钮');
            }
          }
        };
        _proto.hideEndingLabel = function hideEndingLabel() {
          if (this.endingLabel) {
            this.endingLabel.node.active = false;
          }
          if (this.restartButton) {
            this.restartButton.node.active = false;
          }
        };
        _proto.hideAllChoiceButtons = function hideAllChoiceButtons() {
          var choiceButtons = [this.choice1Button, this.choice2Button, this.choice3Button, this.choice4Button];
          for (var i = 0; i < choiceButtons.length; i++) {
            if (choiceButtons[i]) {
              choiceButtons[i].node.active = false;
            }
          }
          console.log('🔒 所有选择按钮已隐藏');
        };
        _proto.showChoicePanel = function showChoicePanel(choices) {
          console.log("\uD83C\uDFAF \u663E\u793A\u9009\u62E9\u9762\u677F\uFF0C\u9009\u62E9\u6570\u91CF: " + choices.length);
          if (!this.choicePanel) {
            console.log("\u274C choicePanel \u7EC4\u4EF6\u672A\u627E\u5230\uFF01");
            return;
          }
          this.currentChoices = choices;

          // ✅ 修复：设置选择界面为最高层级，确保显示在存档界面之上
          if (this.choicePanel.parent) {
            this.choicePanel.parent.setSiblingIndex(this.choicePanel.parent.children.length - 1);
            console.log('🎯 选择界面已设置到最上层');
          }
          this.choicePanel.active = true;

          // ✅ 修复：显示选择界面时，隐藏跳过和暂停按钮
          if (this.skipButton) {
            this.skipButton.node.active = false;
            console.log('⏭️ 隐藏跳过按钮');
          }
          if (this.pauseResumeButton) {
            this.pauseResumeButton.node.active = false;
            console.log('⏸️ 隐藏暂停按钮');
          }
          var choiceButtons = [this.choice1Button, this.choice2Button, this.choice3Button, this.choice4Button];
          var choiceLabels = [this.choice1Label, this.choice2Label, this.choice3Label, this.choice4Label];
          for (var i = 0; i < 4; i++) {
            if (i < choices.length && choices[i]) {
              if (choiceButtons[i]) {
                choiceButtons[i].node.active = true;
              }
              if (choiceLabels[i]) {
                choiceLabels[i].string = choices[i].text;
              }
            } else {
              if (choiceButtons[i]) {
                choiceButtons[i].node.active = false;
              }
            }
          }
          this.gameState = GameState.ChoiceSelection;
          console.log("\u2705 \u9009\u62E9\u754C\u9762\u663E\u793A\u5B8C\u6210\uFF0C" + choices.length + "\u4E2A\u9009\u9879");
        };
        _proto.selectChoice = function selectChoice(choiceIndex) {
          console.log("\uD83C\uDFAF \u9009\u62E9\u6309\u94AE\u70B9\u51FB: \u7D22\u5F15" + choiceIndex);
          if (!this.currentChoices || this.currentChoices.length === 0 || choiceIndex >= this.currentChoices.length || !this.currentChoices[choiceIndex]) {
            console.log("\u274C \u9009\u62E9\u7D22\u5F15\u65E0\u6548");
            return;
          }
          var selectedChoice = this.currentChoices[choiceIndex];
          console.log("\u2705 \u9009\u62E9\u4E86: " + selectedChoice.text);

          // 应用选择效果
          if (selectedChoice.effects) {
            for (var _iterator = _createForOfIteratorHelperLoose(selectedChoice.effects), _step; !(_step = _iterator()).done;) {
              var effect = _step.value;
              if (effect.favorability) {
                this.updateFavorability(effect.character, effect.favorability);
              }
              if (effect.flag) {
                this.gameFlags[effect.flag] = effect.flagValue !== undefined ? effect.flagValue : true;
              }
            }
          }

          // 隐藏选择面板
          if (this.choicePanel) {
            this.choicePanel.active = false;

            // ✅ 修复：隐藏选择界面时，重新显示跳过和暂停按钮
            if (this.skipButton) {
              this.skipButton.node.active = true;
              console.log('⏭️ 重新显示跳过按钮');
            }
            if (this.pauseResumeButton) {
              this.pauseResumeButton.node.active = true;
              console.log('⏸️ 重新显示暂停按钮');
            }
          }

          // 跳转到下一个节点
          if (selectedChoice.nextNode) {
            this.playStoryNode(selectedChoice.nextNode);
          } else {
            this.handleGameEnd();
          }
        }

        // 简化的辅助方法
        ;

        _proto.updateCharacterNames = function updateCharacterNames() {
          if (this.yaxinName) this.yaxinName.string = this.characters.yaxin.name;
          if (this.xiaomengName) this.xiaomengName.string = this.characters.xiaomeng.name;
          if (this.jingyiName) this.jingyiName.string = this.characters.jingyi.name;
        };
        _proto.updateCharacterDisplay = function updateCharacterDisplay() {
          if (this.yaxinBar) {
            this.yaxinBar.progress = this.characters.yaxin.favorability / 100;
          }
          if (this.xiaomengBar) {
            this.xiaomengBar.progress = this.characters.xiaomeng.favorability / 100;
          }
          if (this.jingyiBar) {
            this.jingyiBar.progress = this.characters.jingyi.favorability / 100;
          }
        };
        _proto.updateFavorability = function updateFavorability(characterId, change) {
          if (this.characters[characterId]) {
            var oldFavorability = this.characters[characterId].favorability;
            this.characters[characterId].favorability += change;
            this.characters[characterId].favorability = Math.max(0, Math.min(100, this.characters[characterId].favorability));
            var newFavorability = this.characters[characterId].favorability;
            this.updateCharacterDisplay();

            // 使用专门的好感度AudioSource播放音效
            this.playFavorabilitySound(change > 0);
            console.log(this.characters[characterId].name + " \u597D\u611F\u5EA6\u53D8\u5316: " + (change > 0 ? '+' : '') + change + " (" + oldFavorability + " \u2192 " + newFavorability + ")");

            // 通知成就系统好感度变化
            this.notifyAchievementSystem(characterId, newFavorability, oldFavorability);
          }
        }

        // 播放好感度音效的专门方法
        ;

        _proto.playFavorabilitySound = function playFavorabilitySound(isPositive) {
          var _this6 = this;
          console.log("\uD83D\uDD0A \u64AD\u653E\u597D\u611F\u5EA6\u97F3\u6548: " + (isPositive ? '提升' : '下降'));
          if (!this.favorabilityAudioSource) {
            console.log('❌ 好感度音效源未绑定，无法播放音效');
            return;
          }

          // 如果AudioSource已经在编辑器中绑定了音效文件，直接播放
          if (this.favorabilityAudioSource.clip) {
            console.log("\u2705 \u64AD\u653E\u7F16\u8F91\u5668\u7ED1\u5B9A\u7684\u597D\u611F\u5EA6\u97F3\u6548: " + this.favorabilityAudioSource.clip.name);
            this.favorabilityAudioSource.playOneShot(this.favorabilityAudioSource.clip);
            return;
          }

          // 否则尝试动态加载音效（备用方案）
          var soundName = isPositive ? 'favorability_up' : 'favorability_down';
          var audioPath = this.getAudioPath(soundName);
          if (audioPath) {
            resources.load(audioPath, AudioClip, function (err, audioClip) {
              if (err) {
                console.log("\u274C \u597D\u611F\u5EA6\u97F3\u6548\u52A0\u8F7D\u5931\u8D25: " + audioPath + " - " + err.message);
                return;
              }
              console.log("\u2705 \u597D\u611F\u5EA6\u97F3\u6548\u52A0\u8F7D\u6210\u529F: " + audioPath);
              _this6.favorabilityAudioSource.playOneShot(audioClip);
            });
          } else {
            console.log("\u26A0\uFE0F \u672A\u627E\u5230\u597D\u611F\u5EA6\u97F3\u6548\u6620\u5C04: " + soundName);
          }
        };
        _proto.playSound = function playSound(soundName) {
          var _this7 = this;
          console.log("\uD83D\uDD0A \u64AD\u653E\u97F3\u6548: " + soundName);
          if (!this.sfxSource) {
            console.log('❌ 音效源未绑定，无法播放音效');
            return;
          }

          // 如果AudioSource已经在编辑器中绑定了音效文件，直接播放
          if (this.sfxSource.clip) {
            console.log("\u2705 \u64AD\u653E\u7F16\u8F91\u5668\u7ED1\u5B9A\u7684\u97F3\u6548: " + this.sfxSource.clip.name);
            this.sfxSource.playOneShot(this.sfxSource.clip);
            return;
          }

          // 否则尝试动态加载音效（备用方案）
          var audioPath = this.getAudioPath(soundName);
          if (audioPath) {
            resources.load(audioPath, AudioClip, function (err, audioClip) {
              if (err) {
                console.log("\u274C \u97F3\u6548\u52A0\u8F7D\u5931\u8D25: " + audioPath + " - " + err.message);
                return;
              }
              console.log("\u2705 \u97F3\u6548\u52A0\u8F7D\u6210\u529F: " + audioPath);
              _this7.sfxSource.playOneShot(audioClip);
            });
          } else {
            console.log("\u26A0\uFE0F \u672A\u627E\u5230\u97F3\u6548\u6620\u5C04: " + soundName);
          }
        };
        _proto.getAudioPath = function getAudioPath(soundName) {
          var audioMap = {
            'ui_click': 'audio/sfx/ui-click',
            'choice_select': 'audio/sfx/ui-click',
            // 使用相同的点击音效
            'favorability_up': 'audio/sfx/ui-click',
            'favorability_down': 'audio/sfx/ui-click'
          };
          return audioMap[soundName] || null;
        };
        _proto.playBGM = function playBGM(bgmPath) {
          var _this8 = this;
          console.log("\uD83C\uDFB5 \u64AD\u653EBGM: " + bgmPath);
          if (!this.bgmSource) return;
          if (this.bgmSource.playing) {
            this.bgmSource.stop();
          }

          // 如果AudioSource已经绑定了AudioClip，直接播放
          if (this.bgmSource.clip) {
            this.bgmSource.loop = true;
            // 使用 VolumeManager 应用用户设置的音量
            VolumeManager.applyBgmVolume(this.bgmSource);
            this.bgmSource.play();
            console.log("\u2705 BGM\u64AD\u653E\u6210\u529F\uFF08\u4F7F\u7528\u5DF2\u7ED1\u5B9A\u7684AudioClip\uFF09: " + this.bgmSource.clip.name);
            return;
          }

          // 如果没有绑定AudioClip，则动态加载（备用方案）
          console.log("\uD83D\uDD04 AudioClip\u672A\u7ED1\u5B9A\uFF0C\u5C1D\u8BD5\u52A8\u6001\u52A0\u8F7D: " + bgmPath);
          resources.load(bgmPath, AudioClip, function (err, audioClip) {
            if (err) {
              console.log("\u274C BGM\u52A0\u8F7D\u5931\u8D25: " + bgmPath);
              return;
            }
            _this8.bgmSource.clip = audioClip;
            _this8.bgmSource.loop = true;
            // 使用 VolumeManager 应用用户设置的音量
            VolumeManager.applyBgmVolume(_this8.bgmSource);
            _this8.bgmSource.play();
            console.log("\u2705 BGM\u64AD\u653E\u6210\u529F\uFF08\u52A8\u6001\u52A0\u8F7D\uFF09: " + bgmPath);
          });
        }

        // 其他必要的存根方法
        ;

        _proto.preloadAudioResources = function preloadAudioResources() {
          console.log('🔊 预加载音效资源');
        };
        _proto.testBGMSystem = function testBGMSystem() {
          console.log('🧪 测试BGM系统');
        };
        _proto.initializeSavePanel = function initializeSavePanel() {
          if (this.savePanel) {
            this.savePanel.active = false;
          }
        };
        _proto.openSavePanel = function openSavePanel() {
          if (this.savePanel) {
            this.savePanel.active = true;

            // 确保存档面板显示在最上层，在选择按钮界面之上
            if (this.savePanel.parent) {
              // 设置存档面板为最后一个子节点，确保在最上层
              this.savePanel.parent.setSiblingIndex(this.savePanel.parent.children.length - 1);
              console.log('💾 存档面板已设置到最上层');
            }
          }
        };
        _proto.closeSavePanel = function closeSavePanel() {
          if (this.savePanel) {
            this.savePanel.active = false;
          }
        };
        _proto.restartGame = function restartGame() {
          console.log('🔄 重新开始游戏');
          this.hideEndingLabel();
          this.resetGameState();
          this.startNewGame();
        };
        _proto.resetGameState = function resetGameState() {
          this.characters = JSON.parse(JSON.stringify(GameConfig.CHARACTERS));
          this.gameFlags = {};
          this.currentNode = '';
          this.currentChapter = 1;
          SaveManager.resetGameTimer();
          this.isVideoPaused = false;
          this.updatePauseButtonText('暂停');
          this.setSkipButtonEnabled(true);
          if (this.saveUIManager) {
            this.saveUIManager.setSaveButtonsEnabled(false);
          }
          this.updateCharacterDisplay();
        };
        _proto.onEndingLabelClick = function onEndingLabelClick() {
          this.playSound('ui_click');
          this.hideEndingLabel();
          this.returnToStartScene();
        };
        _proto.skipVideo = function skipVideo() {
          if (this.videoPlayer && this.videoPlayer.isPlaying) {
            this.videoPlayer.stop();
            this.onVideoFinished();
          }
        };
        _proto.toggleVideoPause = function toggleVideoPause() {
          if (!this.videoPlayer) return;
          if (this.isVideoPaused) {
            this.videoPlayer.resume();
            this.isVideoPaused = false;
            this.updatePauseButtonText('暂停');
            this.setSkipButtonEnabled(true);
          } else {
            if (this.videoPlayer.isPlaying) {
              this.videoPlayer.pause();
              this.isVideoPaused = true;
              this.updatePauseButtonText('恢复');
              this.setSkipButtonEnabled(false);
            }
          }
        };
        _proto.updatePauseButtonText = function updatePauseButtonText(text) {
          if (this.pauseResumeButton) {
            var label = this.pauseResumeButton.getComponentInChildren(Label);
            if (label) {
              label.string = text;
            }
          }
        };
        _proto.setSkipButtonEnabled = function setSkipButtonEnabled(enabled) {
          if (this.skipButton) {
            this.skipButton.interactable = enabled;
          }
        };
        _proto.togglePlaybackSpeed = function togglePlaybackSpeed() {
          if (!this.videoPlayer) return;
          this.playbackRateIndex = (this.playbackRateIndex + 1) % this.playbackRates.length;
          this.currentPlaybackRate = this.playbackRates[this.playbackRateIndex];
          this.videoPlayer.playbackRate = this.currentPlaybackRate;
          this.updateSpeedButtonText();
        };
        _proto.updateSpeedButtonText = function updateSpeedButtonText() {
          if (this.speedControlButton) {
            var label = this.speedControlButton.getComponentInChildren(Label);
            if (label) {
              label.string = this.currentPlaybackRate + "\xD7";
            }
          }
        };
        _proto.resetPlaybackSpeed = function resetPlaybackSpeed() {
          this.playbackRateIndex = 0;
          this.currentPlaybackRate = this.playbackRates[0];
          if (this.videoPlayer) {
            this.videoPlayer.playbackRate = this.currentPlaybackRate;
          }
          this.updateSpeedButtonText();
        };
        _proto.applyCurrentPlaybackSpeed = function applyCurrentPlaybackSpeed() {
          if (this.videoPlayer) {
            this.videoPlayer.playbackRate = this.currentPlaybackRate;
            this.updateSpeedButtonText();
          }
        };
        _proto.playEndingNode = function playEndingNode(nodeId) {
          console.log("\uD83C\uDFC6 \u64AD\u653E\u7ED3\u5C40\u8282\u70B9: " + nodeId);
          var endingConfig = GameConfig.ENDINGS[nodeId];
          if (!endingConfig) return;
          this.currentNode = nodeId;
          if (this.progressLabel) {
            this.progressLabel.string = "\u7ED3\u5C40: " + endingConfig.title;
          }
          if (endingConfig.video) {
            this.playVideo(endingConfig.video);
          } else {
            this.onVideoFinished();
          }
        };
        _proto.calculateFinalEnding = function calculateFinalEnding() {
          var yaxin = this.characters.yaxin.favorability;
          var xiaomeng = this.characters.xiaomeng.favorability;
          var jingyi = this.characters.jingyi.favorability;

          // 检查后宫结局
          if (yaxin >= 80 && xiaomeng >= 80 && jingyi >= 80) {
            return 'ending_harem';
          }

          // 找出好感度最高的角色
          var maxFavorability = Math.max(yaxin, xiaomeng, jingyi);
          if (maxFavorability >= 30) {
            if (yaxin === maxFavorability) {
              return 'ending_yaxin_good';
            } else if (xiaomeng === maxFavorability) {
              return 'ending_xiaomeng_good';
            } else {
              return 'ending_jingyi_good';
            }
          }
          return 'ending_alone';
        };
        _proto.handleGameEnd = function handleGameEnd() {
          console.log('🏁 游戏结束');
          if (this.currentNode.indexOf('ending_') === 0 && GameConfig.ENDINGS[this.currentNode]) {
            this.showEndingResult();
          } else {
            this.returnToStartScene();
          }
        };
        _proto.showEndingResult = function showEndingResult() {
          console.log('🎊 显示结局结果');
          if (this.endingLabel) {
            // 创建详细的结局信息
            var endingText = '🎮 游戏结束！🎮\n\n';

            // 显示角色好感度
            endingText += '💕 最终好感度 💕\n';
            endingText += '━━━━━━━━━━━━━━\n';
            if (this.characters.yaxin) {
              var favorability = this.characters.yaxin.favorability;
              var heartLevel = this.getFavorabilityLevel(favorability);
              endingText += "\uD83D\uDC69\u200D\uD83C\uDF93 " + this.characters.yaxin.name + "\uFF1A" + favorability + "/100 " + heartLevel + "\n";
            }
            if (this.characters.xiaomeng) {
              var _favorability = this.characters.xiaomeng.favorability;
              var _heartLevel = this.getFavorabilityLevel(_favorability);
              endingText += "\uD83C\uDFA8 " + this.characters.xiaomeng.name + "\uFF1A" + _favorability + "/100 " + _heartLevel + "\n";
            }
            if (this.characters.jingyi) {
              var _favorability2 = this.characters.jingyi.favorability;
              var _heartLevel2 = this.getFavorabilityLevel(_favorability2);
              endingText += "\uD83D\uDCDA " + this.characters.jingyi.name + "\uFF1A" + _favorability2 + "/100 " + _heartLevel2 + "\n";
            }
            endingText += '\n━━━━━━━━━━━━━━\n';
            endingText += "\uD83D\uDCD6 \u5F53\u524D\u7AE0\u8282\uFF1A\u7B2C" + this.currentChapter + "\u7AE0\n\n";
            endingText += '点击"返回开始界面"重新游戏';
            this.endingLabel.string = endingText;
            this.endingLabel.node.active = true;
          }
          if (this.restartButton) {
            this.restartButton.node.active = true;
          }
        }

        /**
         * 根据好感度获取爱心等级
         * @param favorability 好感度值
         * @returns 爱心等级字符串
         */;
        _proto.getFavorabilityLevel = function getFavorabilityLevel(favorability) {
          // 每10分显示一颗红心，最多10颗心
          var heartCount = Math.min(Math.floor(favorability / 10) + 1, 10);
          return "❤️".repeat(heartCount);
        }

        /**
         * 检查所有组件状态（调试用）
         */;
        _proto.checkComponentStatus = function checkComponentStatus() {
          var _this$gamePanel, _this$choicePanel;
          console.log('🔍 === 组件状态检查 ===');
          console.log('📱 UI组件:');
          console.log('  - GamePanel:', !!this.gamePanel, (_this$gamePanel = this.gamePanel) == null ? void 0 : _this$gamePanel.active);
          console.log('  - ChoicePanel:', !!this.choicePanel, (_this$choicePanel = this.choicePanel) == null ? void 0 : _this$choicePanel.active);
          console.log('  - VideoPlayer:', !!this.videoPlayer);
          console.log('🎵 音频组件:');
          console.log('  - BGM源:', !!this.bgmSource);
          console.log('  - 音效源:', !!this.sfxSource);
          console.log('🎮 游戏状态:');
          console.log('  - 当前状态:', this.gameState);
          console.log('  - 当前节点:', this.currentNode);
          console.log('  - 当前章节:', this.currentChapter);
          console.log('📚 游戏配置:');
          console.log('  - 起始节点:', GameConfig.STARTING_NODE);
          console.log('  - 故事节点数量:', Object.keys(GameConfig.STORY_NODES).length);
          console.log('  - 起始节点配置:', GameConfig.STORY_NODES[GameConfig.STARTING_NODE]);
          console.log('🔍 === 组件状态检查完成 ===');
        }

        // 存档相关接口
        ;

        _proto.loadFromSaveData = function loadFromSaveData(saveData) {
          this.currentNode = saveData.currentNode;
          this.currentChapter = saveData.currentChapter;
          this.characters = saveData.characters;
          this.gameFlags = saveData.gameFlags;
          this.updateCharacterDisplay();
          this.showGamePanel();
          this.playStoryNode(this.currentNode);
          var currentStoryNode = GameConfig.STORY_NODES[this.currentNode];
          if (!(currentStoryNode != null && currentStoryNode.bgm)) {
            this.playBGM('audio/bgm/school-bgm');
          }
        }

        // 公开接口
        ;

        _proto.getCurrentGameState = function getCurrentGameState() {
          return this.gameState;
        };
        _proto.getCharacterData = function getCharacterData() {
          return this.characters;
        };
        _proto.getGameFlags = function getGameFlags() {
          return this.gameFlags;
        };
        /**
         * 初始化成就系统
         */
        _proto.initializeAchievementSystem = function initializeAchievementSystem() {
          try {
            console.log('🏆 [GameController] 初始化成就系统...');
            // 创建成就系统节点并添加到场景根节点
            var achievementNode = new Node("GameAchievementIntegration");
            this.achievementSystem = achievementNode.addComponent(GameAchievementIntegration);

            // 将成就系统节点添加到场景根节点，而不是GameController节点
            var scene = director.getScene();
            if (scene) {
              scene.addChild(achievementNode);
              console.log("📍 [GameController] 成就系统节点已添加到场景根节点");
            } else {
              console.warn("⚠️ [GameController] 无法获取当前场景，将成就系统添加到GameController节点");
              this.node.addChild(achievementNode);
            }

            // 初始化成就系统
            this.achievementSystem.initializeAchievementSystem();
            console.log("✅ [GameController] 成就系统初始化成功");
          } catch (error) {
            console.error('❌ [GameController] 成就系统初始化异常:', error);
          }
        }

        /**
         * 通知成就系统好感度变化
         */;
        _proto.notifyAchievementSystem = function notifyAchievementSystem(characterId, newValue, oldValue) {
          if (!this.achievementSystem) {
            console.log('⚠️ [GameController] 成就系统未初始化，跳过好感度通知');
            return;
          }
          try {
            // 将角色ID映射到成就系统的女主角名称
            var heroineMapping = {
              'yaxin': '林雅欣',
              'xiaomeng': '王小萌',
              'jingyi': '陈静怡'
            };
            var heroineName = heroineMapping[characterId];
            if (heroineName) {
              console.log("\uD83C\uDFC6 [GameController] \u901A\u77E5\u6210\u5C31\u7CFB\u7EDF: " + heroineName + " \u597D\u611F\u5EA6 " + oldValue + " \u2192 " + newValue);
              this.achievementSystem.updateHeroineAffection(heroineName, newValue);
            } else {
              console.warn("\u26A0\uFE0F [GameController] \u672A\u77E5\u7684\u89D2\u8272ID: " + characterId);
            }
          } catch (error) {
            console.error('❌ [GameController] 通知成就系统失败:', error);
          }
        };
        _createClass(GameController, [{
          key: "currentNodeValue",
          get: function get() {
            return this.currentNode;
          }
        }, {
          key: "currentChapterValue",
          get: function get() {
            return this.currentChapter;
          }
        }, {
          key: "charactersValue",
          get: function get() {
            return this.characters;
          }
        }, {
          key: "gameFlagsValue",
          get: function get() {
            return this.gameFlags;
          }
        }, {
          key: "gameStateValue",
          get: function get() {
            return this.gameState;
          }
        }]);
        return GameController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "videoPlayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgmSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sfxSource", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "favorabilityAudioSource", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gamePanel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "choicePanel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "progressLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "endingLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "yaxinBar", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "xiaomengBar", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "jingyiBar", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "yaxinName", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "xiaomengName", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "jingyiName", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "skipButton", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "menuButton", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "restartButton", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "pauseResumeButton", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "speedControlButton", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "saveUIManager", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "openSavePanelButton1", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "openSavePanelButton2", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "savePanel", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "closeSavePanelButton", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "choice1Button", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "choice2Button", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "choice3Button", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "choice4Button", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "choice1Label", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "choice2Label", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "choice3Label", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "choice4Label", [_dec33], {
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

System.register("chunks:///_virtual/GameFlowManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameConfig.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, GameConfig;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      GameConfig = module.GameConfig;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "0c142fPTMFI2J+ZlyKggoYq", "GameFlowManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameFlowManager = exports('GameFlowManager', (_dec = ccclass('GameFlowManager'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameFlowManager, _Component);
        function GameFlowManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.currentNodeId = 'start';
          return _this;
        }
        var _proto = GameFlowManager.prototype;
        _proto.start = function start() {
          // 游戏开始时显示初始进度
          this.updateCurrentNode('start');
        }

        /**
         * 切换到指定的剧情节点
         * @param nodeId 目标节点ID
         */;
        _proto.switchToNode = function switchToNode(nodeId) {
          console.log("\u5207\u6362\u5230\u8282\u70B9: " + nodeId);
          this.updateCurrentNode(nodeId);

          // 这里可以添加其他游戏逻辑，比如：
          // - 播放视频
          // - 更新UI
          // - 保存游戏状态
          // - 触发音效等
        }

        /**
         * 更新当前节点并刷新进度显示
         * @param nodeId 当前节点ID
         */;
        _proto.updateCurrentNode = function updateCurrentNode(nodeId) {
          this.currentNodeId = nodeId;

          // 更新进度显示
          GameConfig.updateProgressDisplay(nodeId);

          // 打印章节信息（调试用）
          var chapterInfo = GameConfig.getNodeChapterInfo(nodeId);
          console.log("\u5F53\u524D\u7AE0\u8282: \u7B2C" + chapterInfo.chapter + "\u7AE0 - " + chapterInfo.name);
        }

        /**
         * 获取当前节点ID
         */;
        _proto.getCurrentNodeId = function getCurrentNodeId() {
          return this.currentNodeId;
        }

        /**
         * 快速测试方法 - 模拟游戏流程
         */;
        _proto.testGameFlow = function testGameFlow() {
          var _this2 = this;
          var testNodes = ['start', 'classroom', 'math_class', 'chapter2_start', 'art_club', 'weekend_choice', 'chapter3_start', 'confession_choice', 'graduation'];
          var index = 0;
          var interval = setInterval(function () {
            if (index < testNodes.length) {
              _this2.switchToNode(testNodes[index]);
              index++;
            } else {
              clearInterval(interval);
              console.log('测试流程完成！');
            }
          }, 2000); // 每2秒切换一个节点
        };

        return GameFlowManager;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameSceneController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameConfig.ts', './SaveManager.ts', './SaveUIManager.ts', './SceneManager.ts', './VolumeManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, VideoPlayer, AudioSource, Node, Label, ProgressBar, Button, resources, VideoClip, AudioClip, Component, GameState, GameConfig, SaveManager, SaveUIManager, SceneManager, VolumeManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      VideoPlayer = module.VideoPlayer;
      AudioSource = module.AudioSource;
      Node = module.Node;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      Button = module.Button;
      resources = module.resources;
      VideoClip = module.VideoClip;
      AudioClip = module.AudioClip;
      Component = module.Component;
    }, function (module) {
      GameState = module.GameState;
      GameConfig = module.GameConfig;
    }, function (module) {
      SaveManager = module.SaveManager;
    }, function (module) {
      SaveUIManager = module.SaveUIManager;
    }, function (module) {
      SceneManager = module.SceneManager;
    }, function (module) {
      VolumeManager = module.VolumeManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32;
      cclegacy._RF.push({}, "3f2f4z+Vy9BwZQ2BEjv2Kr6", "GameSceneController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 🎮 游戏场景控制器
       * 负责处理纯游戏界面的所有逻辑（不包含主菜单）
       */
      var GameSceneController = exports('GameSceneController', (_dec = ccclass('GameSceneController'), _dec2 = property(VideoPlayer), _dec3 = property(AudioSource), _dec4 = property(AudioSource), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(ProgressBar), _dec10 = property(ProgressBar), _dec11 = property(ProgressBar), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Button), _dec16 = property(Button), _dec17 = property(Button), _dec18 = property(Button), _dec19 = property(Button), _dec20 = property(Button), _dec21 = property(SaveUIManager), _dec22 = property(Button), _dec23 = property(Button), _dec24 = property(Node), _dec25 = property(Button), _dec26 = property(Button), _dec27 = property(Button), _dec28 = property(Button), _dec29 = property(Button), _dec30 = property(Label), _dec31 = property(Label), _dec32 = property(Label), _dec33 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameSceneController, _Component);
        function GameSceneController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // 🎮 核心组件
          _initializerDefineProperty(_this, "videoPlayer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgmSource", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfxSource", _descriptor3, _assertThisInitialized(_this));
          // 📱 UI面板（移除mainMenuPanel）
          _initializerDefineProperty(_this, "gamePanel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "choicePanel", _descriptor5, _assertThisInitialized(_this));
          // 📊 进度和结局显示组件
          _initializerDefineProperty(_this, "progressLabel", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "endingLabel", _descriptor7, _assertThisInitialized(_this));
          // 👥 角色好感度显示
          _initializerDefineProperty(_this, "yaxinBar", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xiaomengBar", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jingyiBar", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yaxinName", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xiaomengName", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jingyiName", _descriptor13, _assertThisInitialized(_this));
          // 🎮 游戏控制按钮
          _initializerDefineProperty(_this, "skipButton", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "menuButton", _descriptor15, _assertThisInitialized(_this));
          // 返回开始场景按钮
          _initializerDefineProperty(_this, "restartButton", _descriptor16, _assertThisInitialized(_this));
          // 重新开始游戏按钮
          _initializerDefineProperty(_this, "pauseResumeButton", _descriptor17, _assertThisInitialized(_this));
          // 暂停/恢复按钮
          _initializerDefineProperty(_this, "speedControlButton", _descriptor18, _assertThisInitialized(_this));
          // 播放倍速控制按钮
          _initializerDefineProperty(_this, "branchViewButton", _descriptor19, _assertThisInitialized(_this));
          // 分支查看按钮（临时测试）
          // 💾 存档UI管理器
          _initializerDefineProperty(_this, "saveUIManager", _descriptor20, _assertThisInitialized(_this));
          // 💾 存档面板控制
          _initializerDefineProperty(_this, "openSavePanelButton1", _descriptor21, _assertThisInitialized(_this));
          // 打开存档面板按钮1
          _initializerDefineProperty(_this, "openSavePanelButton2", _descriptor22, _assertThisInitialized(_this));
          // 打开存档面板按钮2
          _initializerDefineProperty(_this, "savePanel", _descriptor23, _assertThisInitialized(_this));
          // 存档面板
          _initializerDefineProperty(_this, "closeSavePanelButton", _descriptor24, _assertThisInitialized(_this));
          // 关闭存档面板按钮
          // 💭 选择按钮
          _initializerDefineProperty(_this, "choice1Button", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "choice2Button", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "choice3Button", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "choice4Button", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "choice1Label", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "choice2Label", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "choice3Label", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "choice4Label", _descriptor32, _assertThisInitialized(_this));
          // 选择按钮数组（用于动态访问）
          _this.choiceButtons = [];
          // 🎯 游戏状态
          _this.gameState = GameState.Playing;
          // 直接进入游戏状态
          _this.currentNode = '';
          _this.currentChapter = 1;
          _this.isVideoPaused = false;
          // 视频暂停状态
          _this.currentPlaybackRate = 1.0;
          // 当前播放倍速
          _this.playbackRates = [1.0, 1.25, 1.5, 2.0];
          // 可选倍速列表
          _this.playbackRateIndex = 0;
          // 当前倍速索引
          // 👥 角色数据
          _this.characters = {};
          // 🚩 游戏标记
          _this.gameFlags = {};
          // 📊 当前选择数据
          _this.currentChoices = [];
          // 🔊 预加载的音效资源
          _this.preloadedAudioClips = {};
          return _this;
        }
        var _proto = GameSceneController.prototype;
        _proto.onLoad = function onLoad() {
          var _this$node$getChildBy, _this$node$getChildBy2, _this$node$getChildBy3, _this$node$getChildBy4, _this$node$getChildBy5, _this$node$getChildBy6, _this$node$getChildBy7, _this$node$getChildBy8, _this$node$getChildBy9, _this$node$getChildBy10, _this$node$getChildBy11, _this$node$getChildBy12, _this$node$getChildBy13;
          console.log('🚀 GameSceneController.onLoad() 开始执行');

          // 获取UI组件引用
          this.gamePanel = this.node.getChildByName('GamePanel');
          this.choicePanel = this.node.getChildByName('ChoicePanel');
          this.videoPlayer = this.node.getComponentInChildren(VideoPlayer);
          console.log('🔍 UI组件检查:');
          console.log('  - GamePanel:', !!this.gamePanel);
          console.log('  - ChoicePanel:', !!this.choicePanel);
          console.log('  - VideoPlayer:', !!this.videoPlayer);

          // 获取按钮引用
          this.skipButton = (_this$node$getChildBy = this.node.getChildByName('SkipButton')) == null ? void 0 : _this$node$getChildBy.getComponent(Button);
          this.menuButton = (_this$node$getChildBy2 = this.node.getChildByName('MenuButton')) == null ? void 0 : _this$node$getChildBy2.getComponent(Button);
          this.restartButton = (_this$node$getChildBy3 = this.node.getChildByName('RestartButton')) == null ? void 0 : _this$node$getChildBy3.getComponent(Button);
          this.pauseResumeButton = (_this$node$getChildBy4 = this.node.getChildByName('PauseResumeButton')) == null ? void 0 : _this$node$getChildBy4.getComponent(Button);
          this.speedControlButton = (_this$node$getChildBy5 = this.node.getChildByName('SpeedControlButton')) == null ? void 0 : _this$node$getChildBy5.getComponent(Button);
          console.log('🔘 按钮组件检查:');
          console.log('  - SkipButton:', !!this.skipButton);
          console.log('  - MenuButton:', !!this.menuButton);
          console.log('  - RestartButton:', !!this.restartButton);
          console.log('  - PauseResumeButton:', !!this.pauseResumeButton);
          console.log('  - SpeedControlButton:', !!this.speedControlButton);

          // 获取存档相关按钮
          this.openSavePanelButton1 = (_this$node$getChildBy6 = this.node.getChildByName('OpenSavePanelButton1')) == null ? void 0 : _this$node$getChildBy6.getComponent(Button);
          this.openSavePanelButton2 = (_this$node$getChildBy7 = this.node.getChildByName('OpenSavePanelButton2')) == null ? void 0 : _this$node$getChildBy7.getComponent(Button);
          this.closeSavePanelButton = (_this$node$getChildBy8 = this.node.getChildByName('CloseSavePanelButton')) == null ? void 0 : _this$node$getChildBy8.getComponent(Button);
          console.log('💾 存档按钮检查:');
          console.log('  - OpenSavePanelButton1:', !!this.openSavePanelButton1);
          console.log('  - OpenSavePanelButton2:', !!this.openSavePanelButton2);
          console.log('  - CloseSavePanelButton:', !!this.closeSavePanelButton);

          // 获取选择按钮
          this.choiceButtons = [(_this$node$getChildBy9 = this.node.getChildByName('ChoiceButton1')) == null ? void 0 : _this$node$getChildBy9.getComponent(Button), (_this$node$getChildBy10 = this.node.getChildByName('ChoiceButton2')) == null ? void 0 : _this$node$getChildBy10.getComponent(Button), (_this$node$getChildBy11 = this.node.getChildByName('ChoiceButton3')) == null ? void 0 : _this$node$getChildBy11.getComponent(Button)];
          console.log('🎯 选择按钮检查:');
          this.choiceButtons.forEach(function (btn, index) {
            console.log("  - ChoiceButton" + (index + 1) + ":", !!btn);
          });

          // 获取其他UI组件
          this.endingLabel = (_this$node$getChildBy12 = this.node.getChildByName('EndingLabel')) == null ? void 0 : _this$node$getChildBy12.getComponent(Label);
          this.progressLabel = (_this$node$getChildBy13 = this.node.getChildByName('ProgressLabel')) == null ? void 0 : _this$node$getChildBy13.getComponent(Label);
          console.log('📊 其他UI组件检查:');
          console.log('  - EndingLabel:', !!this.endingLabel);
          console.log('  - ProgressLabel:', !!this.progressLabel);

          // 检查游戏配置
          console.log('⚙️ 游戏配置检查:');
          console.log('  - STARTING_NODE:', GameConfig.STARTING_NODE);
          console.log('  - STORY_NODES:', Object.keys(GameConfig.STORY_NODES));
          console.log('  - CHARACTERS:', Object.keys(GameConfig.CHARACTERS));

          // 初始化游戏
          this.initializeGame();

          // 设置事件监听器
          this.setupEventListeners();

          // 初始化存档面板状态
          this.initializeSavePanel();
          console.log('✅ GameSceneController.onLoad() 完成');
        };
        _proto.start = function start() {
          var _this2 = this;
          console.log('🚀 GameSceneController.start() 开始执行');

          // 🔊 应用保存的音量设置
          this.applyVolumeSettings();

          // 检查是否有临时存档数据（从存档加载）
          var tempSaveData = SceneManager.getTempSaveData();
          console.log('📋 临时存档数据检查:', tempSaveData ? '存在' : '不存在');
          if (tempSaveData) {
            // 从存档数据加载游戏
            console.log('📂 检测到存档数据，从存档加载游戏');
            this.loadFromSaveData(tempSaveData);
            SceneManager.clearTempSaveData(); // 清除临时数据
          } else {
            // 开始新游戏 - 添加延迟确保组件完全初始化
            console.log('🆕 准备开始新游戏，等待组件初始化...');
            this.scheduleOnce(function () {
              console.log('⏰ 延迟启动游戏');
              _this2.startNewGame();
            }, 0.1); // 延迟0.1秒
          }

          console.log('🎮 准备显示游戏面板');
          // 直接显示游戏面板（不显示主菜单）
          this.showGamePanel();

          // 添加组件状态检查
          this.scheduleOnce(function () {
            _this2.checkComponentStatus();
          }, 0.2);
          console.log('✅ 游戏场景初始化完成');
        }

        /**
         * 初始化游戏
         */;
        _proto.initializeGame = function initializeGame() {
          console.log('🎮 initializeGame 开始执行');

          // 初始化角色数据
          this.characters = JSON.parse(JSON.stringify(GameConfig.CHARACTERS));
          console.log('👥 角色数据已初始化:', Object.keys(this.characters));

          // 更新角色显示
          this.updateCharacterDisplay();
          console.log('🎨 角色显示已更新');

          // 预加载音效
          this.preloadAudioClips();
          console.log('🔊 音效预加载完成');
          console.log('✅ 游戏初始化完成');
        }

        /**
         * 设置事件监听器
         */;
        _proto.setupEventListeners = function setupEventListeners() {
          // 视频播放完成事件
          if (this.videoPlayer) {
            this.videoPlayer.node.on(VideoPlayer.EventType.COMPLETED, this.onVideoFinished, this);
            console.log('📹 视频事件监听器已设置');
          }

          // 按钮事件
          this.bindButtonEvents();
        }

        /**
         * 绑定按钮事件
         */;
        _proto.bindButtonEvents = function bindButtonEvents() {
          var _this3 = this;
          // 跳过按钮
          if (this.skipButton) {
            this.skipButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.skipCurrentVideo();
            }, this);
          }

          // 菜单按钮（返回开始场景）
          if (this.menuButton) {
            this.menuButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.returnToStartScene();
            }, this);
          }

          // 重新开始按钮
          if (this.restartButton) {
            this.restartButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.restartGame();
            }, this);
          }

          // 手动启动游戏按钮（调试用）
          if (this.menuButton) {
            // 长按菜单按钮可以手动启动游戏
            var longPressTimer = null;
            this.menuButton.node.on('touchstart', function () {
              longPressTimer = setTimeout(function () {
                console.log('🔧 长按菜单按钮，手动启动游戏');
                _this3.startNewGame();
              }, 2000); // 长按2秒
            }, this);
            this.menuButton.node.on('touchend', function () {
              if (longPressTimer) {
                clearTimeout(longPressTimer);
                longPressTimer = null;
              }
            }, this);
            this.menuButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.returnToStartScene();
            }, this);
          }

          // 暂停/恢复按钮
          if (this.pauseResumeButton) {
            this.pauseResumeButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.togglePauseResume();
            }, this);
          }

          // 倍速控制按钮
          if (this.speedControlButton) {
            this.speedControlButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.togglePlaybackSpeed();
            }, this);
          }

          // 分支查看按钮（临时测试）
          if (this.branchViewButton) {
            this.branchViewButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.testBranchVisualizer();
            }, this);
          }

          // 💾 存档面板按钮事件
          if (this.openSavePanelButton1) {
            this.openSavePanelButton1.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.openSavePanel();
            }, this);
          }
          if (this.openSavePanelButton2) {
            this.openSavePanelButton2.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.openSavePanel();
            }, this);
          }
          if (this.closeSavePanelButton) {
            this.closeSavePanelButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.closeSavePanel();
            }, this);
          }

          // 选择按钮事件
          if (this.choice1Button) {
            this.choice1Button.node.on('click', function () {
              _this3.playSound('choice_select');
              _this3.handleChoice(0);
            }, this);
          }
          if (this.choice2Button) {
            this.choice2Button.node.on('click', function () {
              _this3.playSound('choice_select');
              _this3.handleChoice(1);
            }, this);
          }
          if (this.choice3Button) {
            this.choice3Button.node.on('click', function () {
              _this3.playSound('choice_select');
              _this3.handleChoice(2);
            }, this);
          }
          if (this.choice4Button) {
            this.choice4Button.node.on('click', function () {
              _this3.playSound('choice_select');
              _this3.handleChoice(3);
            }, this);
          }

          // 🧪 开发者测试功能：按键快捷键
          this.node.on('keydown', function (event) {
            if (GameConfig.DEV_CONFIG.debugMode) {
              switch (event.keyCode) {
                case 69:
                  // E键 - 快速结束游戏测试
                  _this3.testGameEnding();
                  break;
                case 82:
                  // R键 - 重置好感度测试
                  _this3.testResetFavorability();
                  break;
              }
            }
          }, this);
          console.log('🔘 按钮事件绑定完成');
          if (GameConfig.DEV_CONFIG.debugMode) {
            console.log('🧪 开发者快捷键：E=测试结局, R=重置好感度');
          }
        }

        /**
         * 🧪 测试游戏结局显示
         */;
        _proto.testGameEnding = function testGameEnding() {
          console.log('🧪 测试游戏结局显示');

          // 设置测试好感度
          this.characters.yaxin.favorability = 85;
          this.characters.xiaomeng.favorability = 60;
          this.characters.jingyi.favorability = 45;

          // 更新显示
          this.updateCharacterDisplay();

          // 触发雅欣结局
          this.showEnding('ending_yaxin_good');
        }

        /**
         * 🧪 重置好感度测试
         */;
        _proto.testResetFavorability = function testResetFavorability() {
          console.log('🧪 重置好感度测试');
          this.characters.yaxin.favorability = 50;
          this.characters.xiaomeng.favorability = 50;
          this.characters.jingyi.favorability = 50;
          this.updateCharacterDisplay();
          console.log('✅ 好感度已重置为50');
        }

        /**
         * 开始新游戏
         */;
        _proto.startNewGame = function startNewGame() {
          console.log('🆕 开始新游戏');
          console.log('📍 起始节点:', GameConfig.STARTING_NODE);
          console.log('📚 故事节点配置:', GameConfig.STORY_NODES);

          // 重置游戏状态
          this.resetGameState();

          // 重置游戏开始时间
          SaveManager.resetGameTimer();
          console.log('🎬 准备播放第一个故事节点');
          // 播放第一个节点
          this.playStoryNode(GameConfig.STARTING_NODE);
        }

        /**
         * 从存档数据加载游戏
         * @param saveData 存档数据
         */;
        _proto.loadFromSaveData = function loadFromSaveData(saveData) {
          console.log('📂 从存档数据加载游戏');

          // 🎮 恢复游戏数据
          this.currentNode = saveData.currentNode;
          this.currentChapter = saveData.currentChapter;
          this.characters = saveData.characters;
          this.gameFlags = saveData.gameFlags;

          // 🎨 更新UI显示
          this.updateCharacterDisplay();

          // ▶️ 播放当前节点
          this.playStoryNode(this.currentNode);

          // 🎵 恢复背景音乐
          var currentStoryNode = GameConfig.STORY_NODES[this.currentNode];
          if (!(currentStoryNode != null && currentStoryNode.bgm)) {
            this.playDefaultBGMForChapter(this.currentChapter);
          }
          console.log("\u2705 \u4ECE\u5B58\u6863\u52A0\u8F7D\u5B8C\u6210\uFF1A\u8282\u70B9 " + this.currentNode + "\uFF0C\u7B2C " + this.currentChapter + " \u7AE0");
        }

        /**
         * 重置游戏状态
         */;
        _proto.resetGameState = function resetGameState() {
          console.log('🔄 resetGameState 开始执行');
          this.currentNode = GameConfig.STARTING_NODE;
          this.currentChapter = 1;
          this.gameState = GameState.Playing;
          this.gameFlags = {};
          console.log('📊 游戏状态已重置:');
          console.log('  - 当前节点:', this.currentNode);
          console.log('  - 当前章节:', this.currentChapter);
          console.log('  - 游戏状态:', this.gameState);

          // 重置角色数据
          this.characters = JSON.parse(JSON.stringify(GameConfig.CHARACTERS));
          console.log('👥 角色数据已重置');

          // 重置视频状态
          this.isVideoPaused = false;
          this.currentPlaybackRate = 1.0;
          this.playbackRateIndex = 0;
          console.log('🎬 视频状态已重置');

          // 重置UI状态
          this.hideEndingLabel();
          this.hideAllChoiceButtons();
          this.updateCharacterDisplay();
          console.log('🎨 UI状态已重置');
          console.log('✅ 游戏状态重置完成');
        }

        /**
         * 显示游戏面板
         */;
        _proto.showGamePanel = function showGamePanel() {
          console.log('🎮 showGamePanel 被调用');
          console.log('📱 当前面板状态:');
          console.log('  - GamePanel存在:', !!this.gamePanel);
          console.log('  - ChoicePanel存在:', !!this.choicePanel);
          this.hideAllPanels();
          if (this.gamePanel) {
            this.gamePanel.active = true;
            console.log('✅ GamePanel 已激活');
          } else {
            console.error('❌ GamePanel 不存在');
          }

          // 在游戏进行时启用保存按钮
          if (this.saveUIManager) {
            var isGameInProgress = this.gameState === GameState.Playing || this.gameState === GameState.ChoiceSelection;
            this.saveUIManager.setSaveButtonsEnabled(isGameInProgress);
            console.log('💾 保存按钮状态已更新:', isGameInProgress);
          }
          this.gameState = GameState.Playing;
          console.log('🎮 显示游戏面板完成，游戏状态:', this.gameState);
        }

        /**
         * 隐藏所有面板
         */;
        _proto.hideAllPanels = function hideAllPanels() {
          if (this.gamePanel) {
            this.gamePanel.active = false;
          }
          if (this.choicePanel) {
            this.choicePanel.active = false;

            // ✅ 修复：隐藏选择界面时，重新显示跳过和暂停按钮
            if (this.skipButton) {
              this.skipButton.node.active = true;
              console.log('⏭️ 重新显示跳过按钮');
            }
            if (this.pauseResumeButton) {
              this.pauseResumeButton.node.active = true;
              console.log('⏸️ 重新显示暂停按钮');
            }
          }
        }

        /**
         * 返回开始场景
         */;
        _proto.returnToStartScene = function returnToStartScene() {
          console.log('🔙 返回开始场景');

          // 停止当前播放的媒体
          if (this.videoPlayer && this.videoPlayer.isPlaying) {
            this.videoPlayer.stop();
          }
          if (this.bgmSource && this.bgmSource.playing) {
            this.bgmSource.stop();
          }

          // 跳转到开始场景
          SceneManager.returnToStartScene();
        }

        /**
         * 重新开始游戏
         */;
        _proto.restartGame = function restartGame() {
          console.log('🔄 重新开始游戏');

          // 停止当前播放
          if (this.videoPlayer && this.videoPlayer.isPlaying) {
            this.videoPlayer.stop();
          }

          // 重置并开始新游戏
          this.startNewGame();
        }

        // ===== 📱 存档面板管理 =====
        /**
         * 初始化存档面板
         */;
        _proto.initializeSavePanel = function initializeSavePanel() {
          if (this.savePanel) {
            this.savePanel.active = false; // 默认隐藏存档面板
            console.log('💾 存档面板已初始化（默认隐藏）');
          }
        }

        /**
         * 打开存档面板
         */;
        _proto.openSavePanel = function openSavePanel() {
          if (this.savePanel) {
            this.savePanel.active = true;
            console.log('💾 打开存档面板');

            // 确保存档面板显示在最上层，在选择按钮界面之上
            if (this.savePanel.parent) {
              // 设置存档面板为最后一个子节点，确保在最上层
              this.savePanel.parent.setSiblingIndex(this.savePanel.parent.children.length - 1);
              console.log('💾 存档面板已设置到最上层');
            }

            // 如果有SaveUIManager，设置游戏控制器引用
            if (this.saveUIManager) {
              this.saveUIManager.setGameController(this);

              // 直接刷新显示，让各槽位根据存档情况设置正确的按钮状态
              console.log("\uD83D\uDD04 \u5237\u65B0\u5B58\u6863\u9762\u677F\u663E\u793A\uFF0C\u6309\u94AE\u72B6\u6001\u7531\u5404\u69FD\u4F4D\u5355\u72EC\u63A7\u5236");
              this.saveUIManager.refreshDisplay();
            }
          } else {
            console.log('❌ 存档面板未设置');
          }
        }

        /**
         * 关闭存档面板
         */;
        _proto.closeSavePanel = function closeSavePanel() {
          if (this.savePanel) {
            this.savePanel.active = false;
            console.log('💾 关闭存档面板');
          }
        }

        // ===== 🎮 游戏逻辑方法 =====
        // 以下方法需要从原GameController复制，保持游戏核心逻辑不变

        /**
         * 播放指定的故事节点
         * @param nodeId 节点ID
         */;
        _proto.playStoryNode = function playStoryNode(nodeId) {
          console.log('🎬 playStoryNode 被调用，节点ID:', nodeId);
          console.log('🎭 当前游戏状态:', this.gameState);

          // 检查节点是否存在
          var storyNode = GameConfig.STORY_NODES[nodeId];
          if (!storyNode) {
            console.error('❌ 故事节点不存在:', nodeId);
            return;
          }
          console.log('📖 找到故事节点:', storyNode);
          console.log('🎥 视频文件:', storyNode.video);
          console.log('🎵 背景音乐:', storyNode.bgm);
          console.log('🎯 选择项:', storyNode.choices);

          // 更新当前节点
          this.currentNode = nodeId;
          this.currentChapter = storyNode.chapter || 1;

          // 播放背景音乐
          if (storyNode.bgm) {
            this.playBGM(storyNode.bgm);
          } else {
            this.playDefaultBGMForChapter(this.currentChapter);
          }

          // 播放视频
          if (storyNode.video && this.videoPlayer) {
            console.log('🎬 开始播放视频:', storyNode.video);
            this.playVideo(storyNode.video);
          } else {
            console.log('⚠️ 视频播放器不存在或视频文件未指定');
            console.log('📹 视频播放器状态:', this.videoPlayer ? '存在' : '不存在');
            console.log('🎥 视频文件:', storyNode.video);
          }

          // 更新游戏状态
          this.gameState = GameState.Playing;
          console.log('✅ 故事节点播放完成，当前节点:', this.currentNode);
        }

        /**
         * 视频播放完成回调
         */;
        _proto.onVideoFinished = function onVideoFinished() {
          var _this4 = this;
          console.log("\uD83C\uDFAC \u89C6\u9891\u64AD\u653E\u5B8C\u6210\uFF0C\u5F53\u524D\u8282\u70B9: " + this.currentNode);
          var node = GameConfig.STORY_NODES[this.currentNode];
          if (!node) {
            console.log("\u274C \u5F53\u524D\u8282\u70B9\u4E0D\u5B58\u5728: " + this.currentNode);
            return;
          }

          // 处理角色解锁
          if (node.unlockCharacters) {
            node.unlockCharacters.forEach(function (characterId) {
              if (_this4.characters[characterId]) {
                _this4.characters[characterId].unlocked = true;
                console.log("\uD83D\uDD13 \u89D2\u8272\u5DF2\u89E3\u9501: " + _this4.characters[characterId].name);
              }
            });
            this.updateCharacterDisplay();
          }

          // 处理游戏标记设置
          if (node.setFlags) {
            Object.assign(this.gameFlags, node.setFlags);
            console.log("\uD83D\uDEA9 \u8BBE\u7F6E\u6E38\u620F\u6807\u8BB0:", node.setFlags);
          }

          // 判断是否有选择
          if (node.choices && node.choices.length > 0) {
            this.showChoices(node.choices);
          } else if (node.nextNode) {
            if (node.autoNext) {
              // 自动播放下一个节点
              var delay = node.delay || 0;
              if (delay > 0) {
                setTimeout(function () {
                  _this4.playStoryNode(node.nextNode);
                }, delay * 1000);
              } else {
                this.playStoryNode(node.nextNode);
              }
            } else {
              // 等待用户操作或显示继续按钮
              this.showContinueOption(node.nextNode);
            }
          } else {
            // 检查是否到达结局
            this.checkForEnding();
          }
        }

        // 需要从原GameController复制的其他核心方法：
        // - playVideo()
        // - playBGM()
        // - playDefaultBGMForChapter()
        // - showChoices()
        // - handleChoice()
        // - applyCharacterChanges()
        // - updateCharacterDisplay()
        // - updateProgressDisplay()
        // - checkForEnding()
        // - hideEndingLabel()
        // - hideAllChoiceButtons()
        // - skipCurrentVideo()
        // - togglePauseResume()
        // - togglePlaybackSpeed()
        // - preloadAudioClips()
        // - playSound()
        // 等等...

        // 这里为了篇幅，我先创建基础结构，您可以将原GameController中的具体实现方法复制过来

        /**
         * 播放视频
         * @param videoPath 视频文件路径
         */;
        _proto.playVideo = function playVideo(videoPath) {
          var _this5 = this;
          console.log('🎬 playVideo 被调用，视频路径:', videoPath);
          if (!this.videoPlayer) {
            console.error('❌ 视频播放器不存在');
            return;
          }
          console.log('📹 视频播放器状态检查:');
          console.log('  - 节点存在:', !!this.videoPlayer.node);
          console.log('  - 组件存在:', !!this.videoPlayer);
          console.log('  - 当前视频:', this.videoPlayer.clip);

          // 使用原始路径，不添加额外前缀
          var fullPath = videoPath;
          console.log('🔗 完整视频路径:', fullPath);

          // 加载视频资源
          resources.load(fullPath, VideoClip, function (err, videoClip) {
            if (err) {
              console.error('❌ 视频加载失败:', err);
              console.error('📁 尝试加载路径:', fullPath);
              return;
            }
            console.log('✅ 视频加载成功:', videoClip);
            console.log('📹 视频信息:', {
              name: videoClip.name
            });

            // 设置视频并播放
            _this5.videoPlayer.clip = videoClip;

            // 应用视频音量设置
            VolumeManager.applyVideoVolume(_this5.videoPlayer);
            _this5.videoPlayer.play();
            console.log('▶️ 视频开始播放');
            console.log('📊 播放状态:', _this5.videoPlayer.isPlaying);
          });
        };
        _proto.playBGM = function playBGM(bgmPath) {
          var _this6 = this;
          if (!this.bgmSource) {
            console.error("\u274C bgmSource\u672A\u7ED1\u5B9A\uFF0C\u65E0\u6CD5\u64AD\u653EBGM: " + bgmPath);
            return;
          }
          console.log("\uD83C\uDFB5 \u64AD\u653EBGM: " + bgmPath);

          // 如果AudioSource已经绑定了AudioClip，直接播放
          if (this.bgmSource.clip) {
            this.bgmSource.loop = true;
            // 使用 VolumeManager 应用用户设置的音量
            VolumeManager.applyBgmVolume(this.bgmSource);
            this.bgmSource.play();
            console.log("\u2705 BGM\u64AD\u653E\u6210\u529F\uFF08\u4F7F\u7528\u5DF2\u7ED1\u5B9A\u7684AudioClip\uFF09: " + this.bgmSource.clip.name);
            return;
          }

          // 如果没有绑定AudioClip，则动态加载（备用方案）
          console.log("\uD83D\uDD04 AudioClip\u672A\u7ED1\u5B9A\uFF0C\u5C1D\u8BD5\u52A8\u6001\u52A0\u8F7D: " + bgmPath);
          resources.load(bgmPath, AudioClip, function (err, audioClip) {
            if (err) {
              console.error("\u274C BGM\u52A0\u8F7D\u5931\u8D25: " + bgmPath, err);
              return;
            }
            _this6.bgmSource.clip = audioClip;
            _this6.bgmSource.loop = true;
            // 使用 VolumeManager 应用用户设置的音量
            VolumeManager.applyBgmVolume(_this6.bgmSource);
            _this6.bgmSource.play();
            console.log("\u2705 BGM\u64AD\u653E\u6210\u529F\uFF08\u52A8\u6001\u52A0\u8F7D\uFF09: " + bgmPath);
          });
        };
        _proto.playDefaultBGMForChapter = function playDefaultBGMForChapter(chapter) {
          var _this7 = this;
          // 使用唯一存在的BGM文件
          var defaultBgm = 'audio/bgm/school-bgm';
          console.log("\uD83C\uDFB5 [DEFAULT_BGM] \u5C1D\u8BD5\u64AD\u653E\u9ED8\u8BA4BGM: " + defaultBgm);
          console.log("\uD83D\uDCCA [DEFAULT_BGM] \u7AE0\u8282: " + chapter);
          if (!this.bgmSource) {
            console.error("\u274C [DEFAULT_BGM] bgmSource\u672A\u7ED1\u5B9A\uFF0C\u65E0\u6CD5\u64AD\u653E\u9ED8\u8BA4BGM");
            return;
          }
          resources.load(defaultBgm, AudioClip, function (err, audioClip) {
            if (err) {
              console.error("\u274C [DEFAULT_BGM] \u9ED8\u8BA4BGM\u52A0\u8F7D\u5931\u8D25: " + defaultBgm, err);
              return;
            }
            _this7.bgmSource.clip = audioClip;
            _this7.bgmSource.loop = true;
            // 使用 VolumeManager 应用用户设置的音量
            VolumeManager.applyBgmVolume(_this7.bgmSource);
            _this7.bgmSource.play();
            console.log("\u2705 [DEFAULT_BGM] \u9ED8\u8BA4BGM\u64AD\u653E\u6210\u529F: " + defaultBgm);
          });
        };
        _proto.updatePauseButtonText = function updatePauseButtonText(text) {
          if (this.pauseResumeButton) {
            var label = this.pauseResumeButton.getComponentInChildren(Label);
            if (label) {
              label.string = text;
            }
          }
        };
        _proto.setSkipButtonEnabled = function setSkipButtonEnabled(enabled) {
          if (this.skipButton) {
            this.skipButton.interactable = enabled;
          }
        };
        _proto.applyCurrentPlaybackSpeed = function applyCurrentPlaybackSpeed() {
          if (this.videoPlayer && this.videoPlayer.clip) {
            this.videoPlayer.playbackRate = this.currentPlaybackRate;
            console.log("\u26A1 \u5E94\u7528\u64AD\u653E\u500D\u901F: " + this.currentPlaybackRate + "x");
          }
        };
        _proto.showChoices = function showChoices(choices) {
          var _this8 = this;
          this.currentChoices = choices;
          if (this.choicePanel) {
            // ✅ 修复：设置选择界面为最高层级，确保显示在存档界面之上
            if (this.choicePanel.parent) {
              this.choicePanel.parent.setSiblingIndex(this.choicePanel.parent.children.length - 1);
              console.log('🎯 选择界面已设置到最上层');
            }
            this.choicePanel.active = true;

            // ✅ 修复：显示选择界面时，隐藏跳过和暂停按钮
            if (this.skipButton) {
              this.skipButton.node.active = false;
              console.log('⏭️ 隐藏跳过按钮');
            }
            if (this.pauseResumeButton) {
              this.pauseResumeButton.node.active = false;
              console.log('⏸️ 隐藏暂停按钮');
            }
          }

          // 隐藏所有选择按钮
          this.hideAllChoiceButtons();

          // 显示实际的选择
          choices.forEach(function (choice, index) {
            var button = _this8.getChoiceButton(index);
            var label = _this8.getChoiceLabel(index);
            if (button && label) {
              button.node.active = true;
              label.string = choice.text;
              button.node.off('click');
              button.node.on('click', function () {
                _this8.handleChoice(index);
              }, _this8);
            }
          });
        };
        _proto.getChoiceButton = function getChoiceButton(index) {
          switch (index) {
            case 0:
              return this.choice1Button;
            case 1:
              return this.choice2Button;
            case 2:
              return this.choice3Button;
            case 3:
              return this.choice4Button;
            default:
              return null;
          }
        };
        _proto.getChoiceLabel = function getChoiceLabel(index) {
          switch (index) {
            case 0:
              return this.choice1Label;
            case 1:
              return this.choice2Label;
            case 2:
              return this.choice3Label;
            case 3:
              return this.choice4Label;
            default:
              return null;
          }
        };
        _proto.handleChoice = function handleChoice(choiceIndex) {
          var _this9 = this;
          var choice = this.currentChoices[choiceIndex];
          if (!choice) {
            console.error("\u274C \u9009\u62E9\u7D22\u5F15\u65E0\u6548: " + choiceIndex);
            return;
          }
          console.log("\uD83D\uDD18 \u73A9\u5BB6\u9009\u62E9: " + choice.text);

          // 播放选择音效
          this.playSound('ui_click');

          // 隐藏选择面板
          if (this.choicePanel) {
            this.choicePanel.active = false;

            // ✅ 修复：隐藏选择界面时，重新显示跳过和暂停按钮
            if (this.skipButton) {
              this.skipButton.node.active = true;
              console.log('⏭️ 重新显示跳过按钮');
            }
            if (this.pauseResumeButton) {
              this.pauseResumeButton.node.active = true;
              console.log('⏸️ 重新显示暂停按钮');
            }
          }

          // 应用选择效果
          if (choice.effects) {
            choice.effects.forEach(function (effect) {
              if (effect.character && _this9.characters[effect.character]) {
                var oldFavorability = _this9.characters[effect.character].favorability;
                _this9.characters[effect.character].favorability += effect.favorability;

                // 确保好感度在合理范围内
                _this9.characters[effect.character].favorability = Math.max(0, Math.min(100, _this9.characters[effect.character].favorability));
                var newFavorability = _this9.characters[effect.character].favorability;
                if (effect.favorability > 0) {
                  _this9.playSound('favorability_up');
                }
                console.log("\uD83D\uDC95 " + _this9.characters[effect.character].name + " \u597D\u611F\u5EA6\u53D8\u5316: " + oldFavorability + " \u2192 " + newFavorability + " (" + (effect.favorability > 0 ? '+' : '') + effect.favorability + ")");
              }

              // 处理游戏标记
              if (effect.flag) {
                _this9.gameFlags[effect.flag] = effect.flagValue || true;
              }
            });
            this.updateCharacterDisplay();
          }

          // 跳转到下一个节点
          this.playStoryNode(choice.nextNode);
        };
        _proto.updateCharacterDisplay = function updateCharacterDisplay() {
          if (this.yaxinBar && this.characters['yaxin']) {
            var _char = this.characters['yaxin'];
            this.yaxinBar.progress = _char.favorability / 100;
            if (this.yaxinName) {
              this.yaxinName.string = _char.name + " (" + _char.favorability + "/100)";
            }
          }
          if (this.xiaomengBar && this.characters['xiaomeng']) {
            var _char2 = this.characters['xiaomeng'];
            this.xiaomengBar.progress = _char2.favorability / 100;
            if (this.xiaomengName) {
              this.xiaomengName.string = _char2.name + " (" + _char2.favorability + "/100)";
            }
          }
          if (this.jingyiBar && this.characters['jingyi']) {
            var _char3 = this.characters['jingyi'];
            this.jingyiBar.progress = _char3.favorability / 100;
            if (this.jingyiName) {
              this.jingyiName.string = _char3.name + " (" + _char3.favorability + "/100)";
            }
          }
        };
        _proto.updateProgressDisplay = function updateProgressDisplay() {
          if (this.progressLabel) {
            this.progressLabel.string = "\u7B2C " + this.currentChapter + " \u7AE0";
          }
        }

        /**
         * 应用角色变化
         * @param characterChanges 角色变化配置
         */;
        _proto.applyCharacterChanges = function applyCharacterChanges(characterChanges) {
          if (!characterChanges) return;
          for (var characterId in characterChanges) {
            var changes = characterChanges[characterId];
            if (this.characters[characterId]) {
              var character = this.characters[characterId];
              if (changes.favorability !== undefined) {
                var oldFavorability = character.favorability;
                character.favorability = Math.max(0, Math.min(100, character.favorability + changes.favorability));
                console.log("\uD83D\uDC95 " + character.name + " \u597D\u611F\u5EA6\u53D8\u5316: " + oldFavorability + " \u2192 " + character.favorability + " (" + (changes.favorability > 0 ? '+' : '') + changes.favorability + ")");

                // 播放好感度变化音效
                if (changes.favorability > 0) {
                  this.playSound('favorability_up');
                }
              }
              if (changes.unlocked !== undefined) {
                character.unlocked = changes.unlocked;
                if (changes.unlocked) {
                  console.log("\uD83D\uDD13 \u89D2\u8272\u5DF2\u89E3\u9501: " + character.name);
                }
              }
            }
          }
          this.updateCharacterDisplay();
        };
        _proto.checkForEnding = function checkForEnding() {
          console.log('🏁 检查游戏结局');

          // 检查是否满足任何结局条件
          var endings = GameConfig.ENDINGS;
          for (var endingId in endings) {
            var ending = endings[endingId];
            if (this.checkEndingConditions(ending)) {
              this.showEnding(endingId);
              return;
            }
          }
          console.log('📖 未满足结局条件，继续游戏');
        };
        _proto.checkEndingConditions = function checkEndingConditions(ending) {
          var condition = ending.condition;

          // 检查角色好感度条件
          if (condition.favorability) {
            for (var charId in condition.favorability) {
              var requiredFavorability = condition.favorability[charId];
              if (!this.characters[charId] || this.characters[charId].favorability < requiredFavorability) {
                return false;
              }
            }
          }

          // 检查游戏标记条件
          if (condition.flags) {
            for (var flag in condition.flags) {
              if (this.gameFlags[flag] !== condition.flags[flag]) {
                return false;
              }
            }
          }
          return true;
        };
        _proto.showEnding = function showEnding(endingId) {
          var ending = GameConfig.ENDINGS[endingId];
          if (!ending) return;
          console.log("\uD83C\uDFC1 \u663E\u793A\u7ED3\u5C40: " + ending.title);
          if (this.endingLabel) {
            // 创建详细的结局信息
            var endingText = this.createDetailedEndingText(ending);
            this.endingLabel.string = endingText;
            this.endingLabel.node.active = true;
          }

          // 游戏结束
          this.gameState = GameState.Ending;

          // 禁用保存按钮
          if (this.saveUIManager) {
            this.saveUIManager.setSaveButtonsEnabled(false);
          }
        }

        /**
         * 创建详细的结局显示文本
         * @param ending 结局配置
         * @returns 格式化的结局文本
         */;
        _proto.createDetailedEndingText = function createDetailedEndingText(ending) {
          var text = "\uD83C\uDF38 \u7ED3\u5C40\uFF1A" + ending.title + " \uD83C\uDF38\n\n";
          text += ending.description + "\n\n";

          // 显示角色好感度
          text += "\uD83D\uDC95 \u89D2\u8272\u597D\u611F\u5EA6 \uD83D\uDC95\n";
          text += "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n";
          if (this.characters.yaxin) {
            var favorability = this.characters.yaxin.favorability;
            var heartLevel = this.getFavorabilityLevel(favorability);
            text += "\uD83D\uDC69\u200D\uD83C\uDF93 " + this.characters.yaxin.name + "\uFF1A" + favorability + "/100 " + heartLevel + "\n";
          }
          if (this.characters.xiaomeng) {
            var _favorability = this.characters.xiaomeng.favorability;
            var _heartLevel = this.getFavorabilityLevel(_favorability);
            text += "\uD83C\uDFA8 " + this.characters.xiaomeng.name + "\uFF1A" + _favorability + "/100 " + _heartLevel + "\n";
          }
          if (this.characters.jingyi) {
            var _favorability2 = this.characters.jingyi.favorability;
            var _heartLevel2 = this.getFavorabilityLevel(_favorability2);
            text += "\uD83D\uDCDA " + this.characters.jingyi.name + "\uFF1A" + _favorability2 + "/100 " + _heartLevel2 + "\n";
          }
          text += "\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n";

          // 显示游戏统计
          var playTime = this.getFormattedPlayTime();
          text += "\u23F1\uFE0F \u6E38\u620F\u65F6\u957F\uFF1A" + playTime + "\n";
          text += "\uD83D\uDCD6 \u5F53\u524D\u7AE0\u8282\uFF1A\u7B2C" + this.currentChapter + "\u7AE0\n\n";

          // 添加操作提示
          text += "\uD83C\uDFAE \u6E38\u620F\u7ED3\u675F\uFF01\n";
          text += "\u70B9\u51FB\"\u8FD4\u56DE\u5F00\u59CB\u754C\u9762\"\u91CD\u65B0\u6E38\u620F";
          return text;
        }

        /**
         * 根据好感度获取爱心等级
         * @param favorability 好感度值
         * @returns 爱心等级字符串
         */;
        _proto.getFavorabilityLevel = function getFavorabilityLevel(favorability) {
          // 每10分显示一颗红心，最多10颗心
          var heartCount = Math.min(Math.floor(favorability / 10) + 1, 10);
          return "❤️".repeat(heartCount);
        }

        /**
         * 获取格式化的游戏时长
         * @returns 格式化的时长字符串
         */;
        _proto.getFormattedPlayTime = function getFormattedPlayTime() {
          // 从游戏开始时间计算
          var currentTime = Date.now();
          var startTime = SaveManager.getGameStartTime();
          var playTimeMs = currentTime - startTime;
          var playTimeSeconds = Math.floor(playTimeMs / 1000);
          var hours = Math.floor(playTimeSeconds / 3600);
          var minutes = Math.floor(playTimeSeconds % 3600 / 60);
          var seconds = playTimeSeconds % 60;
          if (hours > 0) {
            return hours + "\u5C0F\u65F6" + minutes + "\u5206\u949F" + seconds + "\u79D2";
          } else if (minutes > 0) {
            return minutes + "\u5206\u949F" + seconds + "\u79D2";
          } else {
            return seconds + "\u79D2";
          }
        };
        _proto.showContinueOption = function showContinueOption(nextNode) {
          var _this10 = this;
          console.log("\u23ED\uFE0F \u663E\u793A\u7EE7\u7EED\u9009\u9879\uFF0C\u4E0B\u4E00\u8282\u70B9: " + nextNode);

          // 对于没有自动继续的节点，我们暂时自动继续
          // 在实际游戏中，这里可以显示一个"继续"按钮
          setTimeout(function () {
            _this10.playStoryNode(nextNode);
          }, 1000);
        };
        _proto.hideEndingLabel = function hideEndingLabel() {
          if (this.endingLabel) {
            this.endingLabel.node.active = false;
          }
        };
        _proto.hideAllChoiceButtons = function hideAllChoiceButtons() {
          var buttons = [this.choice1Button, this.choice2Button, this.choice3Button, this.choice4Button];
          buttons.forEach(function (button) {
            if (button) {
              button.node.active = false;
            }
          });
        };
        _proto.skipCurrentVideo = function skipCurrentVideo() {
          console.log('⏭️ 跳过当前视频');
          this.onVideoFinished();
        };
        _proto.togglePauseResume = function togglePauseResume() {
          if (!this.videoPlayer || !this.videoPlayer.clip) {
            console.log('⚠️ 没有视频可以暂停/恢复');
            return;
          }
          if (this.isVideoPaused) {
            // 恢复播放
            this.videoPlayer.play();
            this.isVideoPaused = false;
            this.updatePauseButtonText('暂停');
            console.log('▶️ 视频恢复播放');
          } else {
            // 暂停播放
            this.videoPlayer.pause();
            this.isVideoPaused = true;
            this.updatePauseButtonText('恢复');
            console.log('⏸️ 视频已暂停');
          }
        };
        _proto.togglePlaybackSpeed = function togglePlaybackSpeed() {
          if (!this.videoPlayer || !this.videoPlayer.clip) {
            console.log('⚠️ 没有视频可以调整速度');
            return;
          }
          this.playbackRateIndex = (this.playbackRateIndex + 1) % this.playbackRates.length;
          this.currentPlaybackRate = this.playbackRates[this.playbackRateIndex];
          this.videoPlayer.playbackRate = this.currentPlaybackRate;
          this.updateSpeedButtonText();
          console.log("\u26A1 \u64AD\u653E\u901F\u5EA6\u5DF2\u8C03\u6574\u4E3A: " + this.currentPlaybackRate + "x");
        };
        _proto.updateSpeedButtonText = function updateSpeedButtonText() {
          if (this.speedControlButton) {
            var label = this.speedControlButton.getComponentInChildren(Label);
            if (label) {
              label.string = this.currentPlaybackRate + "x";
            }
          }
        };
        _proto.preloadAudioClips = function preloadAudioClips() {
          var _this11 = this;
          console.log('🔊 开始预加载音效资源');
          var soundEffects = GameConfig.AUDIO_CONFIG.soundEffects;
          var soundNames = Object.keys(soundEffects);
          var loadedCount = 0;
          soundNames.forEach(function (soundName) {
            var soundPath = soundEffects[soundName];
            var pathWithoutExt = soundPath.replace(/\.[^/.]+$/, "");
            resources.load(pathWithoutExt, AudioClip, function (err, audioClip) {
              if (!err && audioClip) {
                _this11.preloadedAudioClips[soundName] = audioClip;
                console.log("\u2705 \u9884\u52A0\u8F7D\u97F3\u6548\u6210\u529F: " + soundName);
              } else {
                console.log("\u274C \u9884\u52A0\u8F7D\u97F3\u6548\u5931\u8D25: " + soundName + ", \u9519\u8BEF: " + ((err == null ? void 0 : err.message) || err));
              }
              loadedCount++;
              if (loadedCount === soundNames.length) {
                console.log("\uD83C\uDFB5 \u97F3\u6548\u9884\u52A0\u8F7D\u5B8C\u6210\uFF0C\u6210\u529F\u52A0\u8F7D " + Object.keys(_this11.preloadedAudioClips).length + "/" + soundNames.length + " \u4E2A\u97F3\u6548");
              }
            });
          });
        };
        _proto.playSound = function playSound(soundName) {
          if (!this.sfxSource) {
            console.warn('⚠️ 音效播放失败：sfxSource未设置');
            return;
          }
          var audioClip = this.preloadedAudioClips[soundName];
          if (audioClip) {
            this.sfxSource.playOneShot(audioClip);
            console.log("\uD83D\uDD0A \u64AD\u653E\u97F3\u6548: " + soundName);
          } else {
            console.warn("\u26A0\uFE0F \u97F3\u6548\u672A\u627E\u5230: " + soundName);
          }
        }

        // ===== 🎯 公共接口（供SaveUIManager调用） =====
        ;
        /**
         * 检查所有组件状态（调试用）
         */
        _proto.checkComponentStatus = function checkComponentStatus() {
          var _this$gamePanel, _this$choicePanel;
          console.log('🔍 === 组件状态检查 ===');
          console.log('📱 UI组件:');
          console.log('  - GamePanel:', !!this.gamePanel, (_this$gamePanel = this.gamePanel) == null ? void 0 : _this$gamePanel.active);
          console.log('  - ChoicePanel:', !!this.choicePanel, (_this$choicePanel = this.choicePanel) == null ? void 0 : _this$choicePanel.active);
          console.log('  - VideoPlayer:', !!this.videoPlayer);
          console.log('🎵 音频组件:');
          console.log('  - BGM源:', !!this.bgmSource);
          console.log('  - 音效源:', !!this.sfxSource);
          console.log('🎮 游戏状态:');
          console.log('  - 当前状态:', this.gameState);
          console.log('  - 当前节点:', this.currentNode);
          console.log('  - 当前章节:', this.currentChapter);
          console.log('📚 游戏配置:');
          console.log('  - 起始节点:', GameConfig.STARTING_NODE);
          console.log('  - 故事节点数量:', Object.keys(GameConfig.STORY_NODES).length);
          console.log('  - 起始节点配置:', GameConfig.STORY_NODES[GameConfig.STARTING_NODE]);
          console.log('🔍 === 组件状态检查完成 ===');
        }

        /**
         * 测试分支可视化器（临时测试）
         */;
        _proto.testBranchVisualizer = function testBranchVisualizer() {
          console.log('🌳 分支可视化器功能暂时不可用');
          console.log('⚠️ 功能正在开发中，敬请期待');
        }

        /**
         * 🔊 应用保存的音量设置
         */;
        _proto.applyVolumeSettings = function applyVolumeSettings() {
          console.log('🔊 开始应用游戏场景音量设置...');

          // 应用音量到AudioSource和VideoPlayer组件
          VolumeManager.applyAllVolumes(this.bgmSource, this.sfxSource, this.videoPlayer);

          // 打印当前音量设置
          VolumeManager.logCurrentVolumes();
          console.log('✅ 游戏场景音量设置应用完成');
        };
        _createClass(GameSceneController, [{
          key: "currentNodeValue",
          get: function get() {
            return this.currentNode;
          }
        }, {
          key: "currentChapterValue",
          get: function get() {
            return this.currentChapter;
          }
        }, {
          key: "charactersValue",
          get: function get() {
            return this.characters;
          }
        }, {
          key: "gameFlagsValue",
          get: function get() {
            return this.gameFlags;
          }
        }, {
          key: "gameStateValue",
          get: function get() {
            return this.gameState;
          }
        }]);
        return GameSceneController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "videoPlayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgmSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sfxSource", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gamePanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "choicePanel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "progressLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "endingLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "yaxinBar", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "xiaomengBar", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "jingyiBar", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "yaxinName", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "xiaomengName", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "jingyiName", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "skipButton", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "menuButton", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "restartButton", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "pauseResumeButton", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "speedControlButton", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "branchViewButton", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "saveUIManager", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "openSavePanelButton1", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "openSavePanelButton2", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "savePanel", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "closeSavePanelButton", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "choice1Button", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "choice2Button", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "choice3Button", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "choice4Button", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "choice1Label", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "choice2Label", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "choice3Label", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "choice4Label", [_dec33], {
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

System.register("chunks:///_virtual/InformationPanelController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, AudioSource, RichText, resources, AudioClip, Component;
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
      Button = module.Button;
      AudioSource = module.AudioSource;
      RichText = module.RichText;
      resources = module.resources;
      AudioClip = module.AudioClip;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "59284cafUdCW5QGFPgqwhUL", "InformationPanelController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var InformationPanelController = exports('InformationPanelController', (_dec = ccclass('InformationPanelController'), _dec2 = property(Node), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(AudioSource), _dec6 = property(RichText), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(InformationPanelController, _Component);
        function InformationPanelController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "panel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showButton", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hideButton", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfxSource", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "informationText", _descriptor5, _assertThisInitialized(_this));
          // 🎵 音频资源
          _this.uiClickClip = null;
          // 📝 女主角信息数据
          _this.characterInfos = {
            yaxin: {
              fullProfile: "<b><color=#4A90E2>\u6797\u96C5\u6B23 (Lin Yaxin)</color></b>\n<color=#CCCCCC>\u5E74\u9F84\uFF1A17\u5C81\n\u8EAB\u9AD8\uFF1A165cm\n\u8840\u578B\uFF1AA\u578B\n\u661F\u5EA7\uFF1A\u5904\u5973\u5EA7\n\u559C\u597D\uFF1A\u6570\u5B66\u3001\u9605\u8BFB\u3001\u53E4\u5178\u97F3\u4E50\n\u6027\u683C\uFF1A\u77E5\u6027\u3001\u51B7\u9759\u3001\u8FFD\u6C42\u5B8C\u7F8E</color>\n\n<color=#FFFFFF><b>\u89D2\u8272\u7B80\u4ECB\uFF1A</b></color>\n<color=#EEEEEE>\u73ED\u7EA7\u91CC\u7684\u5B66\u9738\uFF0C\u603B\u662F\u5750\u5728\u7B2C\u4E00\u6392\u8BA4\u771F\u542C\u8BFE\u3002\n\u5979\u6709\u7740\u4F18\u96C5\u7684\u6C14\u8D28\u548C\u654F\u9510\u7684\u6D1E\u5BDF\u529B\uFF0C\n\u5BF9\u77E5\u8BC6\u6709\u7740\u5F3A\u70C8\u7684\u6E34\u671B\u3002\n\u867D\u7136\u8868\u9762\u4E0A\u770B\u8D77\u6765\u9AD8\u51B7\uFF0C\n\u4F46\u5185\u5FC3\u5176\u5B9E\u5F88\u6E29\u67D4\uFF0C\u53EA\u662F\u4E0D\u5584\u4E8E\u8868\u8FBE\u3002</color>\n\n<color=#FFFFFF><b>\u5174\u8DA3\u7231\u597D\uFF1A</b></color>\n<color=#EEEEEE>\u2022 \u559C\u6B22\u5728\u56FE\u4E66\u9986\u91CC\u5B89\u9759\u5730\u5B66\u4E60\n\u2022 \u64C5\u957F\u6570\u5B66\u548C\u903B\u8F91\u63A8\u7406\n\u2022 \u5076\u5C14\u4F1A\u5F39\u94A2\u7434\u653E\u677E\u5FC3\u60C5\n\u2022 \u5BF9\u53E4\u5178\u6587\u5B66\u6709\u6D53\u539A\u5174\u8DA3</color>\n\n<color=#FFFFFF><b>\u68A6\u60F3\uFF1A</b></color>\n<color=#EEEEEE>\u5E0C\u671B\u80FD\u8003\u4E0A\u9876\u5C16\u5927\u5B66\uFF0C\n\u5C06\u6765\u6210\u4E3A\u4E00\u540D\u4F18\u79C0\u7684\u5B66\u8005\u6216\u7814\u7A76\u5458\u3002</color>",
              basicInfo: "<b><color=#4A90E2>\uD83D\uDCDA \u6797\u96C5\u6B23 (Lin Yaxin)</color></b>\n<color=#666666>20\u5C81 | \u5904\u5973\u5EA7 | \u73ED\u7EA7\u5B66\u9738</color>\n<color=#333333>\u77E5\u6027\u51B7\u9759\u7684\u5B8C\u7F8E\u4E3B\u4E49\u8005\uFF0C\u64C5\u957F\u6570\u5B66\u548C\u903B\u8F91\u63A8\u7406\u3002\n\u8868\u9762\u9AD8\u51B7\u4F46\u5185\u5FC3\u6E29\u67D4\uFF0C\u68A6\u60F3\u6210\u4E3A\u4F18\u79C0\u5B66\u8005\u3002</color>"
            },
            xiaomeng: {
              fullProfile: "<b><color=#F5A623>\u738B\u5C0F\u840C (Wang Xiaomeng)</color></b>\n<color=#CCCCCC>\u5E74\u9F84\uFF1A16\u5C81\n\u8EAB\u9AD8\uFF1A158cm\n\u8840\u578B\uFF1AB\u578B\n\u661F\u5EA7\uFF1A\u53CC\u5B50\u5EA7\n\u559C\u597D\uFF1A\u7ED8\u753B\u3001\u52A8\u6F2B\u3001\u6D41\u884C\u97F3\u4E50\n\u6027\u683C\uFF1A\u6D3B\u6CFC\u3001\u521B\u610F\u5341\u8DB3\u3001\u4E50\u89C2\u5F00\u6717</color>\n\n<color=#FFFFFF><b>\u89D2\u8272\u7B80\u4ECB\uFF1A</b></color>\n<color=#EEEEEE>\u827A\u672F\u793E\u7684\u6838\u5FC3\u6210\u5458\uFF0C\u603B\u662F\u5145\u6EE1\u521B\u610F\u548C\u60F3\u8C61\u529B\u3002\n\u5979\u7684\u753B\u4F5C\u8272\u5F69\u4E30\u5BCC\uFF0C\u5145\u6EE1\u4E86\u9752\u6625\u7684\u6D3B\u529B\u3002\n\u6027\u683C\u5F00\u6717\u6D3B\u6CFC\uFF0C\u5F88\u5BB9\u6613\u548C\u4EBA\u6253\u6210\u4E00\u7247\uFF0C\n\u662F\u73ED\u7EA7\u91CC\u7684\u5F00\u5FC3\u679C\uFF0C\u603B\u80FD\u5E26\u7ED9\u5927\u5BB6\u6B22\u4E50\u3002</color>\n\n<color=#FFFFFF><b>\u5174\u8DA3\u7231\u597D\uFF1A</b></color>\n<color=#EEEEEE>\u2022 \u70ED\u7231\u7ED8\u753B\uFF0C\u5C24\u5176\u64C5\u957F\u6C34\u5F69\u753B\n\u2022 \u559C\u6B22\u770B\u52A8\u6F2B\u548C\u6F2B\u753B\n\u2022 \u7ECF\u5E38\u542C\u6700\u65B0\u7684\u6D41\u884C\u97F3\u4E50\n\u2022 \u559C\u6B22\u5C1D\u8BD5\u5404\u79CD\u65B0\u9C9C\u4E8B\u7269</color>\n\n<color=#FFFFFF><b>\u68A6\u60F3\uFF1A</b></color>\n<color=#EEEEEE>\u5E0C\u671B\u80FD\u6210\u4E3A\u4E00\u540D\u4E13\u4E1A\u7684\u63D2\u753B\u5E08\uFF0C\n\u7528\u81EA\u5DF1\u7684\u753B\u7B14\u4E3A\u4E16\u754C\u589E\u6DFB\u66F4\u591A\u8272\u5F69\u3002</color>",
              basicInfo: "<b><color=#F5A623>\uD83C\uDFA8 \u738B\u5C0F\u840C (Wang Xiaomeng)</color></b>\n<color=#666666>19\u5C81 | \u53CC\u5B50\u5EA7 | \u827A\u672F\u793E\u660E\u661F</color>\n<color=#333333>\u6D3B\u6CFC\u5F00\u6717\u7684\u521B\u610F\u8FBE\u4EBA\uFF0C\u70ED\u7231\u7ED8\u753B\u548C\u52A8\u6F2B\u3002\n\u662F\u73ED\u7EA7\u7684\u5F00\u5FC3\u679C\uFF0C\u68A6\u60F3\u6210\u4E3A\u4E13\u4E1A\u63D2\u753B\u5E08\u3002</color>"
            },
            jingyi: {
              fullProfile: "<b><color=#7ED321>\u9648\u9759\u6021 (Chen Jingyi)</color></b>\n<color=#CCCCCC>\u5E74\u9F84\uFF1A17\u5C81\n\u8EAB\u9AD8\uFF1A162cm\n\u8840\u578B\uFF1AAB\u578B\n\u661F\u5EA7\uFF1A\u5929\u79E4\u5EA7\n\u559C\u597D\uFF1A\u6587\u5B66\u3001\u5199\u4F5C\u3001\u56ED\u827A\n\u6027\u683C\uFF1A\u6E29\u67D4\u3001\u4F53\u8D34\u3001\u5185\u5411\u654F\u611F</color>\n\n<color=#FFFFFF><b>\u89D2\u8272\u7B80\u4ECB\uFF1A</b></color>\n<color=#EEEEEE>\u56FE\u4E66\u7BA1\u7406\u5458\u7684\u5F97\u529B\u52A9\u624B\uFF0C\u603B\u662F\u5728\u56FE\u4E66\u9986\u91CC\u5FD9\u788C\u7740\u3002\n\u5979\u559C\u6B22\u5B89\u9759\u7684\u73AF\u5883\uFF0C\u6709\u7740\u7EC6\u817B\u7684\u60C5\u611F\u548C\u4E30\u5BCC\u7684\u5185\u5FC3\u4E16\u754C\u3002\n\u867D\u7136\u8BDD\u4E0D\u591A\uFF0C\u4F46\u603B\u662F\u80FD\u5728\u5173\u952E\u65F6\u523B\u7ED9\u51FA\u6700\u6E29\u6696\u7684\u5173\u6000\uFF0C\n\u662F\u4E2A\u503C\u5F97\u4FE1\u8D56\u7684\u8D34\u5FC3\u670B\u53CB\u3002</color>\n\n<color=#FFFFFF><b>\u5174\u8DA3\u7231\u597D\uFF1A</b></color>\n<color=#EEEEEE>\u2022 \u70ED\u7231\u9605\u8BFB\u5404\u79CD\u6587\u5B66\u4F5C\u54C1\n\u2022 \u559C\u6B22\u5199\u8BD7\u548C\u6563\u6587\n\u2022 \u5728\u5B66\u6821\u82B1\u56ED\u91CC\u79CD\u690D\u82B1\u8349\n\u2022 \u4EAB\u53D7\u5B89\u9759\u7684\u4E0B\u5348\u8336\u65F6\u5149</color>\n\n<color=#FFFFFF><b>\u68A6\u60F3\uFF1A</b></color>\n<color=#EEEEEE>\u5E0C\u671B\u80FD\u6210\u4E3A\u4E00\u540D\u4F5C\u5BB6\uFF0C\n\u7528\u6587\u5B57\u8BB0\u5F55\u751F\u6D3B\u4E2D\u7684\u7F8E\u597D\u77AC\u95F4\u3002</color>",
              basicInfo: "<b><color=#7ED321>\uD83D\uDCD6 \u9648\u9759\u6021 (Chen Jingyi)</color></b>\n<color=#666666>21\u5C81 | \u5929\u79E4\u5EA7 | \u56FE\u4E66\u7BA1\u7406\u5458</color>\n<color=#333333>\u6E29\u67D4\u4F53\u8D34\u7684\u6587\u5B66\u5C11\u5973\uFF0C\u559C\u6B22\u9605\u8BFB\u548C\u5199\u4F5C\u3002\n\u5185\u5FC3\u4E16\u754C\u4E30\u5BCC\u7EC6\u817B\uFF0C\u68A6\u60F3\u6210\u4E3A\u4E00\u540D\u4F5C\u5BB6\u3002</color>"
            }
          };
          return _this;
        }
        var _proto = InformationPanelController.prototype;
        _proto.start = function start() {
          // 初始化时隐藏面板
          if (this.panel) {
            this.panel.active = false;
          }

          // 初始化音频
          this.initializeAudio();

          // 绑定按钮事件
          if (this.showButton) {
            this.showButton.node.on(Button.EventType.CLICK, this.showPanel, this);
          }
          if (this.hideButton) {
            this.hideButton.node.on(Button.EventType.CLICK, this.hidePanel, this);
          }

          // 初始化信息显示
          this.updateCharacterInformation();
        }

        /**
         * 初始化音频
         */;
        _proto.initializeAudio = function initializeAudio() {
          var _this2 = this;
          console.log('🎵 InformationPanelController 初始化音频...');
          if (!this.sfxSource) {
            console.warn('⚠️ InformationPanelController 音效组件未设置');
            return;
          }

          // 加载UI点击音效
          resources.load('audio/sfx/ui-click', AudioClip, function (err, clip) {
            if (err) {
              console.error('❌ InformationPanelController UI点击音效加载失败:', err);
              return;
            }
            _this2.uiClickClip = clip;
            console.log('✅ InformationPanelController UI点击音效加载完成');
          });
        }

        /**
         * 显示面板
         */;
        _proto.showPanel = function showPanel() {
          this.playSound('ui_click');
          if (this.panel) {
            this.panel.active = true;
            this.updateCharacterInformation(); // 每次显示时更新信息
            console.log('📋 角色信息面板已显示');
          }
        }

        /**
         * 隐藏面板
         */;
        _proto.hidePanel = function hidePanel() {
          this.playSound('ui_click');
          if (this.panel) {
            this.panel.active = false;
            console.log('📋 角色信息面板已隐藏');
          }
        }

        /**
         * 切换面板显示状态
         */;
        _proto.togglePanel = function togglePanel() {
          this.playSound('ui_click');
          if (this.panel) {
            this.panel.active = !this.panel.active;
            if (this.panel.active) {
              this.updateCharacterInformation();
            }
            console.log('📋 角色信息面板状态切换为:', this.panel.active ? '显示' : '隐藏');
          }
        }

        /**
         * 更新角色信息显示
         */;
        _proto.updateCharacterInformation = function updateCharacterInformation() {
          if (!this.informationText) {
            console.warn('⚠️ 信息文本组件未设置');
            return;
          }

          // 显示三位女主角的基本信息
          var infoContent = '<b><color=#8B4513>🌸 青春恋爱物语 - 角色介绍 🌸</color></b>\n\n';

          // 林雅欣
          infoContent += this.characterInfos.yaxin.basicInfo;
          infoContent += '\n\n─────────────────────────\n\n';

          // 王小萌
          infoContent += this.characterInfos.xiaomeng.basicInfo;
          infoContent += '\n\n─────────────────────────\n\n';

          // 陈静怡
          infoContent += this.characterInfos.jingyi.basicInfo;
          infoContent += '\n\n<color=#D4A574><b>💡 游戏提示：</b></color>';
          infoContent += '\n<color=#555555>• 通过不同的选择与角色互动';
          infoContent += '\n• 提升好感度解锁更多剧情';
          infoContent += '\n• 每个角色都有独特的故事线</color>';
          this.informationText.string = infoContent;
        }

        /**
         * 播放音效
         * @param soundName 音效名称
         */;
        _proto.playSound = function playSound(soundName) {
          if (!this.sfxSource) return;
          switch (soundName) {
            case 'ui_click':
              if (this.uiClickClip) {
                this.sfxSource.playOneShot(this.uiClickClip, 0.7);
              }
              break;
          }
        }

        /**
         * 外部调用：刷新角色信息显示
         */;
        _proto.refreshCharacterInfo = function refreshCharacterInfo() {
          if (this.panel && this.panel.active) {
            this.updateCharacterInformation();
          }
        };
        return InformationPanelController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "panel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "showButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hideButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sfxSource", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "informationText", [_dec6], {
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

System.register("chunks:///_virtual/LoadGameUIManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SaveManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Label, Component, SaveManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      SaveManager = module.SaveManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "d6e62uQe2hE/LZJlEtT/FBF", "LoadGameUIManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 💾 读档UI管理器
       * 专门处理开始场景的存档加载界面
       */
      var LoadGameUIManager = exports('LoadGameUIManager', (_dec = ccclass('LoadGameUIManager'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Button), _dec9 = property(Button), _dec10 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoadGameUIManager, _Component);
        function LoadGameUIManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // 📂 存档槽位按钮（最多3个）
          _initializerDefineProperty(_this, "loadSlot1Button", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadSlot2Button", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadSlot3Button", _descriptor3, _assertThisInitialized(_this));
          // 📊 存档信息标签
          _initializerDefineProperty(_this, "slot1InfoLabel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slot2InfoLabel", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slot3InfoLabel", _descriptor6, _assertThisInitialized(_this));
          // 🗑️ 删除存档按钮（可选）
          _initializerDefineProperty(_this, "deleteSlot1Button", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "deleteSlot2Button", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "deleteSlot3Button", _descriptor9, _assertThisInitialized(_this));
          // 引用开始场景控制器
          _this.startSceneController = null;
          // 存档槽位数组（便于批量操作）
          _this.loadButtons = [];
          _this.infoLabels = [];
          _this.deleteButtons = [];
          return _this;
        }
        var _proto = LoadGameUIManager.prototype;
        _proto.onLoad = function onLoad() {
          this.initializeArrays();
          this.bindButtonEvents();
          console.log('💾 读档UI管理器初始化完成');
        };
        _proto.start = function start() {
          this.refreshSaveSlots();
        }

        /**
         * 设置开始场景控制器引用
         * @param controller 开始场景控制器
         */;
        _proto.setStartSceneController = function setStartSceneController(controller) {
          this.startSceneController = controller;
          console.log('🔗 开始场景控制器引用已设置');
        }

        /**
         * 初始化数组
         */;
        _proto.initializeArrays = function initializeArrays() {
          this.loadButtons = [this.loadSlot1Button, this.loadSlot2Button, this.loadSlot3Button];
          this.infoLabels = [this.slot1InfoLabel, this.slot2InfoLabel, this.slot3InfoLabel];
          this.deleteButtons = [this.deleteSlot1Button, this.deleteSlot2Button, this.deleteSlot3Button];
        }

        /**
         * 绑定按钮事件
         */;
        _proto.bindButtonEvents = function bindButtonEvents() {
          var _this2 = this;
          // 绑定加载按钮事件
          this.loadButtons.forEach(function (button, index) {
            if (button) {
              var slotId = index + 1;
              button.node.on('click', function () {
                _this2.loadFromSlot(slotId);
              }, _this2);
            }
          });

          // 绑定删除按钮事件
          this.deleteButtons.forEach(function (button, index) {
            if (button) {
              var slotId = index + 1;
              button.node.on('click', function () {
                _this2.deleteSlot(slotId);
              }, _this2);
            }
          });
          console.log('🔘 读档按钮事件绑定完成');
        }

        /**
         * 刷新所有存档槽位显示
         */;
        _proto.refreshSaveSlots = function refreshSaveSlots() {
          console.log('🔄 刷新存档槽位显示...');
          for (var i = 0; i < 3; i++) {
            var slotId = i + 1;
            this.updateSlotDisplay(slotId);
          }
          console.log('✅ 存档槽位显示刷新完成');
        }

        /**
         * 更新单个存档槽位显示
         * @param slotId 槽位ID（1-3）
         */;
        _proto.updateSlotDisplay = function updateSlotDisplay(slotId) {
          var index = slotId - 1;
          var loadButton = this.loadButtons[index];
          var infoLabel = this.infoLabels[index];
          var deleteButton = this.deleteButtons[index];
          if (!loadButton || !infoLabel) {
            console.warn("\u26A0\uFE0F \u69FD\u4F4D " + slotId + " \u7684UI\u7EC4\u4EF6\u672A\u8BBE\u7F6E");
            return;
          }

          // 检查存档是否存在
          var saveData = SaveManager.loadGame(slotId);
          if (saveData) {
            // 存档存在，显示存档信息
            this.displaySaveInfo(saveData, loadButton, infoLabel, deleteButton);
          } else {
            // 存档不存在，显示空槽位
            this.displayEmptySlot(loadButton, infoLabel, deleteButton);
          }
        }

        /**
         * 显示存档信息
         * @param saveData 存档数据
         * @param loadButton 加载按钮
         * @param infoLabel 信息标签
         * @param deleteButton 删除按钮
         */;
        _proto.displaySaveInfo = function displaySaveInfo(saveData, loadButton, infoLabel, deleteButton) {
          // 启用加载按钮
          loadButton.interactable = true;

          // 显示存档信息
          var playTimeMin = Math.floor(saveData.playTime / 60);
          var playTimeSec = saveData.playTime % 60;
          var timeStr = playTimeMin + ":" + (playTimeSec < 10 ? '0' : '') + playTimeSec;
          var displayText = ["\u7B2C" + saveData.currentChapter + "\u7AE0", "\u6E38\u620F\u65F6\u957F: " + timeStr, "\u4FDD\u5B58\u65F6\u95F4: " + saveData.saveTime].join('\n');
          infoLabel.string = displayText;

          // 启用删除按钮（如果存在）
          if (deleteButton) {
            deleteButton.interactable = true;
            deleteButton.node.active = true;
          }
          console.log("\uD83D\uDCCA \u69FD\u4F4D " + saveData.saveSlot + " \u5B58\u6863\u4FE1\u606F\u5DF2\u66F4\u65B0");
        }

        /**
         * 显示空槽位
         * @param loadButton 加载按钮
         * @param infoLabel 信息标签
         * @param deleteButton 删除按钮
         */;
        _proto.displayEmptySlot = function displayEmptySlot(loadButton, infoLabel, deleteButton) {
          // 禁用加载按钮
          loadButton.interactable = false;

          // 显示空槽位提示
          infoLabel.string = "空槽位\n\n暂无存档";

          // 隐藏/禁用删除按钮
          if (deleteButton) {
            deleteButton.interactable = false;
            deleteButton.node.active = false;
          }
        }

        /**
         * 从指定槽位加载游戏
         * @param slotId 槽位ID（1-3）
         */;
        _proto.loadFromSlot = function loadFromSlot(slotId) {
          console.log("\uD83D\uDCC2 \u5C1D\u8BD5\u4ECE\u69FD\u4F4D " + slotId + " \u52A0\u8F7D\u6E38\u620F...");

          // 加载存档数据
          var saveData = SaveManager.loadGame(slotId);
          if (!saveData) {
            console.error("\u274C \u69FD\u4F4D " + slotId + " \u6CA1\u6709\u6709\u6548\u5B58\u6863");
            return;
          }

          // 验证数据完整性
          if (!this.validateSaveData(saveData)) {
            console.error("\u274C \u69FD\u4F4D " + slotId + " \u7684\u5B58\u6863\u6570\u636E\u635F\u574F");
            return;
          }

          // 通知开始场景控制器加载游戏
          if (this.startSceneController) {
            this.startSceneController.loadGameFromSave(saveData);
          } else {
            console.error('❌ 开始场景控制器引用未设置，无法加载游戏');
          }
        }

        /**
         * 删除指定槽位的存档
         * @param slotId 槽位ID（1-3）
         */;
        _proto.deleteSlot = function deleteSlot(slotId) {
          console.log("\uD83D\uDDD1\uFE0F \u5220\u9664\u69FD\u4F4D " + slotId + " \u7684\u5B58\u6863...");

          // 删除存档
          var success = SaveManager.deleteSave(slotId);
          if (success) {
            console.log("\u2705 \u69FD\u4F4D " + slotId + " \u5B58\u6863\u5220\u9664\u6210\u529F");
            // 刷新显示
            this.updateSlotDisplay(slotId);
          } else {
            console.error("\u274C \u69FD\u4F4D " + slotId + " \u5B58\u6863\u5220\u9664\u5931\u8D25");
          }
        }

        /**
         * 验证存档数据
         * @param saveData 存档数据
         * @returns 是否有效
         */;
        _proto.validateSaveData = function validateSaveData(saveData) {
          return !!(saveData && typeof saveData.currentNode === 'string' && typeof saveData.currentChapter === 'number' && saveData.characters && saveData.gameFlags && saveData.saveTime && typeof saveData.playTime === 'number' && typeof saveData.saveSlot === 'number');
        }

        /**
         * 获取最新的存档槽位
         * @returns 最新存档的槽位ID，如果没有存档返回null
         */;
        _proto.getLatestSaveSlot = function getLatestSaveSlot() {
          var latestSlot = null;
          var latestTime = 0;
          for (var i = 1; i <= 3; i++) {
            var saveData = SaveManager.loadGame(i);
            if (saveData && saveData.playTime > latestTime) {
              latestTime = saveData.playTime;
              latestSlot = i;
            }
          }
          return latestSlot;
        }

        /**
         * 高亮显示指定槽位（可选功能）
         * @param slotId 槽位ID
         */;
        _proto.highlightSlot = function highlightSlot(slotId) {
          // TODO: 实现槽位高亮显示
          console.log("\u2728 \u9AD8\u4EAE\u663E\u793A\u69FD\u4F4D " + slotId);
        };
        return LoadGameUIManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadSlot1Button", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loadSlot2Button", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loadSlot3Button", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "slot1InfoLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "slot2InfoLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "slot3InfoLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "deleteSlot1Button", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "deleteSlot2Button", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "deleteSlot3Button", [_dec10], {
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

System.register("chunks:///_virtual/main", ['./VolumeManager.ts', './GameConfig.ts', './GameController.ts', './GameFlowManager.ts', './GameSceneController.ts', './NodeToggleController.ts', './ProgressDisplay.ts', './ResourcePreloader.ts', './SaveManager.ts', './SaveUIManager.ts', './SceneManager.ts', './AchievementData.ts', './AchievementNotificationManager.ts', './AchievementNotificationUI.ts', './GameAchievementIntegration.ts', './GameAchievementManager.ts', './GameAchievementTracker.ts', './StartSceneIntegration.ts', './AudioTest.ts', './ClickAudioController.ts', './InformationPanelController.ts', './LoadGameUIManager.ts', './SettingsPanelController.ts', './SimpleAudioTest.ts', './StartSceneController.ts', './AchievementConfig.ts', './AchievementItem.ts', './AchievementManager.ts', './AchievementPanel.ts', './StartSceneAchievementIntegration.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/NodeToggleController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, input, Input, UIOpacity, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      input = module.input;
      Input = module.Input;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "ef408wfHXVCvLwkKgJJrwvn", "NodeToggleController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 节点切换控制器
       * 功能：点击屏幕切换节点数组的显示/隐藏状态
       * 隐藏时渐渐透明，显示时直接显示
       */
      var NodeToggleController = exports('NodeToggleController', (_dec = ccclass('NodeToggleController'), _dec2 = property({
        type: [Node],
        displayName: "目标节点数组",
        tooltip: "需要切换显示/隐藏的节点数组"
      }), _dec3 = property({
        displayName: "初始显示状态",
        tooltip: "节点数组的初始显示状态，true为显示，false为隐藏"
      }), _dec4 = property({
        displayName: "渐隐持续时间",
        tooltip: "节点隐藏时的渐隐动画持续时间（秒）",
        min: 0.1,
        max: 3.0,
        step: 0.1
      }), _dec5 = property({
        displayName: "启用日志输出",
        tooltip: "是否在控制台输出切换状态日志"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NodeToggleController, _Component);
        function NodeToggleController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "targetNodes", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "initialVisible", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fadeOutDuration", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enableLog", _descriptor4, _assertThisInitialized(_this));
          // 当前显示状态
          _this._isVisible = true;
          // 是否正在执行动画
          _this._isAnimating = false;
          return _this;
        }
        var _proto = NodeToggleController.prototype;
        _proto.onLoad = function onLoad() {
          // 设置初始状态
          this._isVisible = this.initialVisible;
          this.initializeNodes();

          // 注册触摸事件监听
          this.registerTouchEvents();
          if (this.enableLog) {
            console.log("[NodeToggleController] \u521D\u59CB\u5316\u5B8C\u6210\uFF0C\u8282\u70B9\u6570\u91CF: " + this.targetNodes.length + ", \u521D\u59CB\u72B6\u6001: " + (this._isVisible ? '显示' : '隐藏'));
          }
        };
        _proto.onDestroy = function onDestroy() {
          // 移除触摸事件监听
          this.unregisterTouchEvents();
        }

        /**
         * 注册触摸事件监听
         */;
        _proto.registerTouchEvents = function registerTouchEvents() {
          // 监听触摸开始事件
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        }

        /**
         * 移除触摸事件监听
         */;
        _proto.unregisterTouchEvents = function unregisterTouchEvents() {
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        }

        /**
         * 触摸开始事件处理
         * @param event 触摸事件
         */;
        _proto.onTouchStart = function onTouchStart(event) {
          // 如果正在执行动画，忽略触摸
          if (this._isAnimating) {
            return;
          }
          this.toggleNodes();
        }

        /**
         * 切换节点显示状态
         */;
        _proto.toggleNodes = function toggleNodes() {
          // 如果正在执行动画，忽略操作
          if (this._isAnimating) {
            return;
          }
          this._isVisible = !this._isVisible;
          if (this._isVisible) {
            // 显示时直接显示
            this.showNodesImmediately();
          } else {
            // 隐藏时渐隐
            this.fadeOutNodes();
          }
          if (this.enableLog) {
            console.log("[NodeToggleController] \u5207\u6362\u8282\u70B9\u72B6\u6001: " + (this._isVisible ? '显示' : '隐藏'));
          }
        }

        /**
         * 初始化节点状态
         */;
        _proto.initializeNodes = function initializeNodes() {
          if (!this.targetNodes || this.targetNodes.length === 0) {
            if (this.enableLog) {
              console.warn('[NodeToggleController] 目标节点数组为空，无法执行初始化操作');
            }
            return;
          }
          for (var i = 0; i < this.targetNodes.length; i++) {
            var node = this.targetNodes[i];
            if (node && node.isValid) {
              // 确保节点有UIOpacity组件
              var opacity = node.getComponent(UIOpacity);
              if (!opacity) {
                opacity = node.addComponent(UIOpacity);
              }
              if (this._isVisible) {
                node.active = true;
                opacity.opacity = 255;
              } else {
                node.active = false;
                opacity.opacity = 0;
              }
            } else if (this.enableLog) {
              console.warn("[NodeToggleController] \u8282\u70B9\u7D22\u5F15 " + i + " \u65E0\u6548\u6216\u5DF2\u9500\u6BC1");
            }
          }
        }

        /**
         * 立即显示所有节点
         */;
        _proto.showNodesImmediately = function showNodesImmediately() {
          if (!this.targetNodes || this.targetNodes.length === 0) {
            return;
          }
          for (var i = 0; i < this.targetNodes.length; i++) {
            var node = this.targetNodes[i];
            if (node && node.isValid) {
              var opacity = node.getComponent(UIOpacity);
              if (!opacity) {
                opacity = node.addComponent(UIOpacity);
              }

              // 停止可能存在的缓动动画
              tween(opacity).stop();

              // 立即显示
              node.active = true;
              opacity.opacity = 255;
            }
          }
        }

        /**
         * 渐隐所有节点
         */;
        _proto.fadeOutNodes = function fadeOutNodes() {
          var _this2 = this;
          if (!this.targetNodes || this.targetNodes.length === 0) {
            return;
          }
          this._isAnimating = true;
          var animationCount = 0;
          var totalNodes = this.targetNodes.length;
          var _loop = function _loop() {
            var node = _this2.targetNodes[i];
            if (node && node.isValid) {
              var opacity = node.getComponent(UIOpacity);
              if (!opacity) {
                opacity = node.addComponent(UIOpacity);
              }

              // 停止可能存在的缓动动画
              tween(opacity).stop();

              // 执行渐隐动画
              tween(opacity).to(_this2.fadeOutDuration, {
                opacity: 0
              }).call(function () {
                // 动画完成后隐藏节点
                node.active = false;
                animationCount++;

                // 所有动画完成后重置状态
                if (animationCount >= totalNodes) {
                  _this2._isAnimating = false;
                }
              }).start();
            } else {
              animationCount++;
              if (animationCount >= totalNodes) {
                _this2._isAnimating = false;
              }
            }
          };
          for (var i = 0; i < this.targetNodes.length; i++) {
            _loop();
          }
        }

        /**
         * 显示所有节点（公共方法）
         */;
        _proto.showAllNodes = function showAllNodes() {
          if (this._isAnimating) {
            return;
          }
          this._isVisible = true;
          this.showNodesImmediately();
          if (this.enableLog) {
            console.log('[NodeToggleController] 显示所有节点');
          }
        }

        /**
         * 隐藏所有节点（公共方法，带渐隐效果）
         */;
        _proto.hideAllNodes = function hideAllNodes() {
          if (this._isAnimating) {
            return;
          }
          this._isVisible = false;
          this.fadeOutNodes();
          if (this.enableLog) {
            console.log('[NodeToggleController] 隐藏所有节点');
          }
        }

        /**
         * 立即隐藏所有节点（无动画）
         */;
        _proto.hideAllNodesImmediately = function hideAllNodesImmediately() {
          if (!this.targetNodes || this.targetNodes.length === 0) {
            return;
          }
          this._isVisible = false;
          for (var i = 0; i < this.targetNodes.length; i++) {
            var node = this.targetNodes[i];
            if (node && node.isValid) {
              var opacity = node.getComponent(UIOpacity);
              if (!opacity) {
                opacity = node.addComponent(UIOpacity);
              }

              // 停止可能存在的缓动动画
              tween(opacity).stop();

              // 立即隐藏
              node.active = false;
              opacity.opacity = 0;
            }
          }
          this._isAnimating = false;
          if (this.enableLog) {
            console.log('[NodeToggleController] 立即隐藏所有节点');
          }
        }

        /**
         * 获取当前显示状态
         */;
        /**
         * 添加节点到目标数组
         * @param node 要添加的节点
         */
        _proto.addTargetNode = function addTargetNode(node) {
          if (node && this.targetNodes.indexOf(node) === -1) {
            this.targetNodes.push(node);

            // 确保新添加的节点有UIOpacity组件
            var opacity = node.getComponent(UIOpacity);
            if (!opacity) {
              opacity = node.addComponent(UIOpacity);
            }

            // 设置为当前状态
            if (this._isVisible) {
              node.active = true;
              opacity.opacity = 255;
            } else {
              node.active = false;
              opacity.opacity = 0;
            }
            if (this.enableLog) {
              console.log("[NodeToggleController] \u6DFB\u52A0\u8282\u70B9: " + node.name);
            }
          }
        }

        /**
         * 从目标数组移除节点
         * @param node 要移除的节点
         */;
        _proto.removeTargetNode = function removeTargetNode(node) {
          var index = this.targetNodes.indexOf(node);
          if (index !== -1) {
            this.targetNodes.splice(index, 1);
            if (this.enableLog) {
              console.log("[NodeToggleController] \u79FB\u9664\u8282\u70B9: " + node.name);
            }
          }
        }

        /**
         * 清空所有目标节点
         */;
        _proto.clearTargetNodes = function clearTargetNodes() {
          this.targetNodes = [];
          if (this.enableLog) {
            console.log('[NodeToggleController] 清空所有目标节点');
          }
        };
        _createClass(NodeToggleController, [{
          key: "isVisible",
          get: function get() {
            return this._isVisible;
          }
        }]);
        return NodeToggleController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "targetNodes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "initialVisible", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "fadeOutDuration", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "enableLog", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProgressDisplay.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "0fd60kBfsNEsKUYwomcwoEO", "ProgressDisplay", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ProgressDisplay = exports('ProgressDisplay', (_dec = ccclass('ProgressDisplay'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ProgressDisplay, _Component);
        function ProgressDisplay() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "progressLabel", _descriptor, _assertThisInitialized(_this));
          _this.chapterInfo = {
            // 第一章 - 新生入学
            'start': {
              chapter: '第一章',
              section: '新生入学'
            },
            'classroom': {
              chapter: '第一章',
              section: '进入教室'
            },
            'introduce': {
              chapter: '第一章',
              section: '自我介绍'
            },
            'quiet': {
              chapter: '第一章',
              section: '安静入座'
            },
            'observe': {
              chapter: '第一章',
              section: '观察同学'
            },
            'math_class': {
              chapter: '第一章',
              section: '数学课'
            },
            'help_yaxin': {
              chapter: '第一章',
              section: '帮助雅欣'
            },
            'watch_yaxin': {
              chapter: '第一章',
              section: '观察雅欣'
            },
            'focus_study': {
              chapter: '第一章',
              section: '专心学习'
            },
            'interrupt_rudely': {
              chapter: '第一章',
              section: '不当指正'
            },
            'lunch_time': {
              chapter: '第一章',
              section: '午餐时间'
            },
            'cafeteria': {
              chapter: '第一章',
              section: '食堂用餐'
            },
            'classroom_lunch': {
              chapter: '第一章',
              section: '教室午餐'
            },
            'rooftop': {
              chapter: '第一章',
              section: '天台用餐'
            },
            // 第二章 - 社团生活
            'chapter2_start': {
              chapter: '第二章',
              section: '社团招新'
            },
            'art_club': {
              chapter: '第二章',
              section: '艺术社'
            },
            'library': {
              chapter: '第二章',
              section: '图书馆'
            },
            'sports_club': {
              chapter: '第二章',
              section: '体育社'
            },
            'join_art': {
              chapter: '第二章',
              section: '加入艺术社'
            },
            'praise_art': {
              chapter: '第二章',
              section: '欣赏画作'
            },
            'criticize_art': {
              chapter: '第二章',
              section: '批评画作'
            },
            'help_books': {
              chapter: '第二章',
              section: '整理图书'
            },
            'ask_books': {
              chapter: '第二章',
              section: '询问推荐'
            },
            'quiet_reading': {
              chapter: '第二章',
              section: '安静阅读'
            },
            'disturb_reading': {
              chapter: '第二章',
              section: '打扰他人'
            },
            'weekend_choice': {
              chapter: '第二章',
              section: '周末计划'
            },
            'cancel_plans': {
              chapter: '第二章',
              section: '临时变卦'
            },
            'cafe_date_yaxin': {
              chapter: '第二章',
              section: '咖啡厅约会'
            },
            'art_date_xiaomeng': {
              chapter: '第二章',
              section: '艺术展约会'
            },
            'bookstore_date_jingyi': {
              chapter: '第二章',
              section: '书店约会'
            },
            // 第三章 - 校园祭典
            'chapter3_start': {
              chapter: '第三章',
              section: '校园祭典'
            },
            'fireworks_yaxin': {
              chapter: '第三章',
              section: '烟花与雅欣'
            },
            'exhibition_xiaomeng': {
              chapter: '第三章',
              section: '画展与小萌'
            },
            'chat_jingyi': {
              chapter: '第三章',
              section: '图书角与静怡'
            },
            'leave_early': {
              chapter: '第三章',
              section: '独自离去'
            },
            'confession_choice': {
              chapter: '第三章',
              section: '告白时刻'
            },
            'confess_yaxin': {
              chapter: '第三章',
              section: '向雅欣告白'
            },
            'confess_xiaomeng': {
              chapter: '第三章',
              section: '向小萌告白'
            },
            'confess_jingyi': {
              chapter: '第三章',
              section: '向静怡告白'
            },
            'wait_and_see': {
              chapter: '第三章',
              section: '再等等看'
            },
            'avoid_confession': {
              chapter: '第三章',
              section: '逃避现实'
            },
            // 第四章 - 结局
            'graduation': {
              chapter: '第四章',
              section: '毕业典礼'
            },
            'ending_calculator': {
              chapter: '第四章',
              section: '结局计算'
            }
          };
          return _this;
        }
        var _proto = ProgressDisplay.prototype;
        _proto.start = function start() {
          this.updateProgress('start');
        }

        /**
         * 更新进度显示
         * @param nodeId 当前剧情节点ID
         */;
        _proto.updateProgress = function updateProgress(nodeId) {
          if (!this.progressLabel) {
            console.warn('ProgressDisplay: progressLabel 未绑定');
            return;
          }
          var info = this.chapterInfo[nodeId];
          if (info) {
            this.progressLabel.string = info.chapter + " - " + info.section;
          } else {
            // 如果是结局节点，显示结局信息
            if (nodeId.startsWith('ending_')) {
              this.progressLabel.string = '第四章 - 故事结局';
            } else {
              this.progressLabel.string = '游戏进行中...';
              console.warn("ProgressDisplay: \u672A\u627E\u5230\u8282\u70B9 " + nodeId + " \u7684\u7AE0\u8282\u4FE1\u606F");
            }
          }
        }

        /**
         * 获取当前章节号
         * @param nodeId 剧情节点ID
         * @returns 章节号(1-4)
         */;
        _proto.getCurrentChapter = function getCurrentChapter(nodeId) {
          var info = this.chapterInfo[nodeId];
          if (info) {
            var chapterMatch = info.chapter.match(/第([一二三四])章/);
            if (chapterMatch) {
              var chapterMap = {
                '一': 1,
                '二': 2,
                '三': 3,
                '四': 4
              };
              return chapterMap[chapterMatch[1]] || 1;
            }
          }
          return 1;
        }

        /**
         * 获取章节进度百分比
         * @param nodeId 剧情节点ID
         * @returns 进度百分比(0-100)
         */;
        _proto.getProgress = function getProgress(nodeId) {
          var _this2 = this;
          var chapter = this.getCurrentChapter(nodeId);

          // 粗略计算：每章25%的进度
          var baseProgress = (chapter - 1) * 25;

          // 根据节点在章节中的位置微调
          var chapterNodes = Object.keys(this.chapterInfo).filter(function (key) {
            return _this2.chapterInfo[key].chapter.includes(chapter === 1 ? '一' : chapter === 2 ? '二' : chapter === 3 ? '三' : '四');
          });
          var nodeIndex = chapterNodes.indexOf(nodeId);
          var chapterProgress = nodeIndex >= 0 ? nodeIndex / chapterNodes.length * 25 : 0;
          return Math.min(100, baseProgress + chapterProgress);
        };
        return ProgressDisplay;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressLabel", [_dec2], {
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

System.register("chunks:///_virtual/ResourcePreloader.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, ProgressBar, Label, resources, Component, AudioClip, VideoClip;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ProgressBar = module.ProgressBar;
      Label = module.Label;
      resources = module.resources;
      Component = module.Component;
      AudioClip = module.AudioClip;
      VideoClip = module.VideoClip;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "65c21lvf+VDhrThIZQrMouA", "ResourcePreloader", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ResourcePreloader = exports('ResourcePreloader', (_dec = ccclass('ResourcePreloader'), _dec2 = property(ProgressBar), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ResourcePreloader, _Component);
        function ResourcePreloader() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "loadingBar", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipLabel", _descriptor3, _assertThisInitialized(_this));
          // 需要预加载的资源列表
          _this.resourceList = {
            // 视频文件
            videos: [
            // 第一章视频
            'video/chapter1/01-transfer-student', 'video/chapter1/02-enter-classroom', 'video/chapter1/03-self-introduction', 'video/chapter1/04-sit-quietly', 'video/chapter1/05-observe-students', 'video/chapter1/06-math-class', 'video/chapter1/07-help-yaxin', 'video/chapter1/08-watch-yaxin', 'video/chapter1/09-focus-study', 'video/chapter1/10-lunch-time', 'video/chapter1/11-cafeteria', 'video/chapter1/12-classroom-lunch', 'video/chapter1/13-rooftop',
            // 第二章视频
            'video/chapter2/01-club-recruitment', 'video/chapter2/02-meet-xiaomeng', 'video/chapter2/03-meet-jingyi', 'video/chapter2/04-join-art-club', 'video/chapter2/05-praise-artwork', 'video/chapter2/06-sports-club', 'video/chapter2/07-help-organize', 'video/chapter2/08-book-recommendation', 'video/chapter2/09-peaceful-reading', 'video/chapter2/10-weekend-choice', 'video/chapter2/11-cafe-date-yaxin', 'video/chapter2/12-art-date-xiaomeng', 'video/chapter2/13-bookstore-date-jingyi',
            // 第三章视频
            'video/chapter3/01-school-festival', 'video/chapter3/02-fireworks-yaxin', 'video/chapter3/03-exhibition-xiaomeng', 'video/chapter3/04-chat-jingyi', 'video/chapter3/05-confession-choice', 'video/chapter3/06-confess-yaxin', 'video/chapter3/07-confess-xiaomeng', 'video/chapter3/08-confess-jingyi', 'video/chapter3/09-wait-and-see',
            // 第四章视频
            'video/chapter4/01-graduation', 'video/chapter4/02-ending-transition', 'video/chapter4/03-ending-yaxin-good', 'video/chapter4/04-ending-xiaomeng-good', 'video/chapter4/05-ending-jingyi-good', 'video/chapter4/06-ending-alone', 'video/chapter4/07-ending-harem'],
            // 音频文件
            audios: [
            // 背景音乐
            'audio/bgm/school-bgm',
            // 音效
            'audio/sfx/ui-click', 'audio/sfx/favorability-change']
          };
          _this.loadingTips = ["准备邂逅美丽的校园生活...", "三位女主角正在等待与你相遇...", "每个选择都会影响你的命运...", "多种结局等待你来解锁...", "记住保存游戏进度哦...", "用心感受每一段剧情..."];
          return _this;
        }
        var _proto = ResourcePreloader.prototype;
        _proto.start = function start() {
          this.startPreloading();
        };
        _proto.startPreloading = /*#__PURE__*/function () {
          var _startPreloading = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (this.tipLabel) {
                    this.showRandomTip();
                    // 每3秒更换一次提示
                    this.schedule(this.showRandomTip, 3);
                  }
                  _context.prev = 1;
                  _context.next = 4;
                  return this.preloadAllResources();
                case 4:
                  this.onLoadingComplete();
                  _context.next = 11;
                  break;
                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](1);
                  console.error('资源加载失败:', _context.t0);
                  this.onLoadingError();
                case 11:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[1, 7]]);
          }));
          function startPreloading() {
            return _startPreloading.apply(this, arguments);
          }
          return startPreloading;
        }();
        _proto.preloadAllResources = /*#__PURE__*/function () {
          var _preloadAllResources = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var totalResources, loadedCount, _iterator, _step, videoPath, _iterator2, _step2, audioPath;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  totalResources = this.resourceList.videos.length + this.resourceList.audios.length;
                  loadedCount = 0; // 预加载视频
                  _iterator = _createForOfIteratorHelperLoose(this.resourceList.videos);
                case 3:
                  if ((_step = _iterator()).done) {
                    _context2.next = 19;
                    break;
                  }
                  videoPath = _step.value;
                  _context2.prev = 5;
                  _context2.next = 8;
                  return this.loadResource(videoPath, VideoClip);
                case 8:
                  loadedCount++;
                  this.updateProgress(loadedCount, totalResources, "\u52A0\u8F7D\u89C6\u9891: " + this.getFileName(videoPath));
                  _context2.next = 17;
                  break;
                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2["catch"](5);
                  console.warn("\u89C6\u9891\u52A0\u8F7D\u5931\u8D25: " + videoPath, _context2.t0);
                  loadedCount++;
                  this.updateProgress(loadedCount, totalResources, "\u8DF3\u8FC7: " + this.getFileName(videoPath));
                case 17:
                  _context2.next = 3;
                  break;
                case 19:
                  _iterator2 = _createForOfIteratorHelperLoose(this.resourceList.audios);
                case 20:
                  if ((_step2 = _iterator2()).done) {
                    _context2.next = 36;
                    break;
                  }
                  audioPath = _step2.value;
                  _context2.prev = 22;
                  _context2.next = 25;
                  return this.loadResource(audioPath, AudioClip);
                case 25:
                  loadedCount++;
                  this.updateProgress(loadedCount, totalResources, "\u52A0\u8F7D\u97F3\u9891: " + this.getFileName(audioPath));
                  _context2.next = 34;
                  break;
                case 29:
                  _context2.prev = 29;
                  _context2.t1 = _context2["catch"](22);
                  console.warn("\u97F3\u9891\u52A0\u8F7D\u5931\u8D25: " + audioPath, _context2.t1);
                  loadedCount++;
                  this.updateProgress(loadedCount, totalResources, "\u8DF3\u8FC7: " + this.getFileName(audioPath));
                case 34:
                  _context2.next = 20;
                  break;
                case 36:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[5, 12], [22, 29]]);
          }));
          function preloadAllResources() {
            return _preloadAllResources.apply(this, arguments);
          }
          return preloadAllResources;
        }();
        _proto.loadResource = function loadResource(path, type) {
          return new Promise(function (resolve, reject) {
            resources.load(path, type, function (err, asset) {
              if (err) {
                reject(err);
              } else {
                resolve(asset);
              }
            });
          });
        };
        _proto.updateProgress = function updateProgress(loaded, total, currentFile) {
          var progress = loaded / total;
          if (this.loadingBar) {
            this.loadingBar.progress = progress;
          }
          if (this.loadingLabel) {
            this.loadingLabel.string = currentFile + " (" + loaded + "/" + total + ")";
          }
        };
        _proto.getFileName = function getFileName(path) {
          var parts = path.split('/');
          return parts[parts.length - 1];
        };
        _proto.showRandomTip = function showRandomTip() {
          if (this.tipLabel) {
            var randomIndex = Math.floor(Math.random() * this.loadingTips.length);
            this.tipLabel.string = this.loadingTips[randomIndex];
          }
        };
        _proto.onLoadingComplete = function onLoadingComplete() {
          var _this2 = this;
          if (this.loadingLabel) {
            this.loadingLabel.string = "加载完成！准备开始游戏...";
          }

          // 停止提示更新
          this.unschedule(this.showRandomTip);

          // 延迟1秒后开始游戏
          this.scheduleOnce(function () {
            // 发送加载完成事件
            _this2.node.emit('loading-complete');
          }, 1);
        };
        _proto.onLoadingError = function onLoadingError() {
          var _this3 = this;
          if (this.loadingLabel) {
            this.loadingLabel.string = "部分资源加载失败，但游戏仍可继续";
          }

          // 停止提示更新
          this.unschedule(this.showRandomTip);

          // 延迟2秒后开始游戏
          this.scheduleOnce(function () {
            _this3.node.emit('loading-complete');
          }, 2);
        }

        // 获取预加载进度
        ;

        _proto.getProgress = function getProgress() {
          return this.loadingBar ? this.loadingBar.progress : 0;
        }

        // 检查是否加载完成
        ;

        _proto.isLoadingComplete = function isLoadingComplete() {
          return this.getProgress() >= 1.0;
        };
        return ResourcePreloader;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadingBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loadingLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tipLabel", [_dec4], {
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

System.register("chunks:///_virtual/SaveManager.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sys = module.sys;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "6d257Dijq5DCpMoycvgar61", "SaveManager", undefined);
      var ccclass = _decorator.ccclass;

      // 存档数据接口

      // 存档槽位信息

      var SaveManager = exports('SaveManager', (_dec = ccclass('SaveManager'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function SaveManager() {}
        /**
         * 初始化存档管理器
         */
        SaveManager.initialize = function initialize() {
          SaveManager.gameStartTime = Date.now();
          console.log('💾 存档管理器已初始化');
        }

        /**
         * 保存游戏到指定槽位
         * @param slot 存档槽位（1-3）
         * @param currentNode 当前故事节点
         * @param currentChapter 当前章节
         * @param characters 角色数据
         * @param gameFlags 游戏标记
         * @returns 是否保存成功
         */;
        SaveManager.saveGame = function saveGame(slot, currentNode, currentChapter, characters, gameFlags) {
          try {
            // 验证槽位范围
            if (slot < 1 || slot > SaveManager.MAX_SAVE_SLOTS) {
              console.error("\u274C \u65E0\u6548\u7684\u5B58\u6863\u69FD\u4F4D: " + slot + "\uFF0C\u6709\u6548\u8303\u56F4: 1-" + SaveManager.MAX_SAVE_SLOTS);
              return false;
            }

            // 计算游戏时长
            var playTime = Math.floor((Date.now() - SaveManager.gameStartTime) / 1000);

            // 创建存档数据
            var saveData = {
              currentNode: currentNode,
              currentChapter: currentChapter,
              characters: JSON.parse(JSON.stringify(characters)),
              // 深拷贝
              gameFlags: JSON.parse(JSON.stringify(gameFlags)),
              // 深拷贝
              saveTime: new Date().toLocaleString('zh-CN'),
              playTime: playTime,
              saveSlot: slot,
              gameVersion: SaveManager.GAME_VERSION
            };

            // 保存到本地存储
            var saveKey = SaveManager.SAVE_KEY_PREFIX + slot;
            sys.localStorage.setItem(saveKey, JSON.stringify(saveData));

            // 生成存档文件到save文件夹
            SaveManager.generateSaveFile(slot, saveData);

            // 更新存档列表
            SaveManager.updateSaveList(slot, saveData);
            console.log("\u2705 \u6E38\u620F\u5DF2\u4FDD\u5B58\u5230\u69FD\u4F4D " + slot);
            console.log("\uD83D\uDCCA \u5B58\u6863\u4FE1\u606F: \u7AE0\u8282" + currentChapter + ", \u8282\u70B9" + currentNode + ", \u6E38\u620F\u65F6\u957F" + SaveManager.formatTime(playTime));
            console.log("\uD83D\uDCBE \u5B58\u6863\u6587\u4EF6\u5DF2\u751F\u6210: save/slot_" + slot + ".json");
            return true;
          } catch (error) {
            console.error('❌ 保存游戏失败:', error);
            return false;
          }
        }

        /**
         * 从指定槽位加载游戏
         * @param slot 存档槽位
         * @returns 存档数据，失败返回null
         */;
        SaveManager.loadGame = function loadGame(slot) {
          try {
            // 验证槽位范围
            if (slot < 1 || slot > SaveManager.MAX_SAVE_SLOTS) {
              console.error("\u274C \u65E0\u6548\u7684\u5B58\u6863\u69FD\u4F4D: " + slot);
              return null;
            }

            // 优先从存档文件读取
            var saveData = SaveManager.loadFromSaveFile(slot);

            // 如果存档文件不存在，从localStorage读取
            if (!saveData) {
              var saveKey = SaveManager.SAVE_KEY_PREFIX + slot;
              var saveDataStr = sys.localStorage.getItem(saveKey);
              if (!saveDataStr) {
                console.log("\uD83D\uDCED \u69FD\u4F4D " + slot + " \u6CA1\u6709\u5B58\u6863\u6570\u636E");
                return null;
              }
              saveData = JSON.parse(saveDataStr);
            }

            // 验证存档数据
            if (!SaveManager.validateSaveData(saveData)) {
              console.error("\u274C \u69FD\u4F4D " + slot + " \u7684\u5B58\u6863\u6570\u636E\u635F\u574F");
              return null;
            }

            // 重置游戏开始时间（从存档开始计算）
            SaveManager.gameStartTime = Date.now() - saveData.playTime * 1000;
            console.log("\u2705 \u5DF2\u4ECE\u69FD\u4F4D " + slot + " \u52A0\u8F7D\u6E38\u620F");
            console.log("\uD83D\uDCCA \u5B58\u6863\u4FE1\u606F: \u7AE0\u8282" + saveData.currentChapter + ", \u8282\u70B9" + saveData.currentNode);
            console.log("\u23F0 \u4FDD\u5B58\u65F6\u95F4: " + saveData.saveTime + ", \u6E38\u620F\u65F6\u957F: " + SaveManager.formatTime(saveData.playTime));
            return saveData;
          } catch (error) {
            console.error("\u274C \u52A0\u8F7D\u69FD\u4F4D " + slot + " \u5931\u8D25:", error);
            return null;
          }
        }

        /**
         * 删除指定槽位的存档
         * @param slot 存档槽位
         * @returns 是否删除成功
         */;
        SaveManager.deleteSave = function deleteSave(slot) {
          try {
            // 验证槽位范围
            if (slot < 1 || slot > SaveManager.MAX_SAVE_SLOTS) {
              console.error("\u274C \u65E0\u6548\u7684\u5B58\u6863\u69FD\u4F4D: " + slot);
              return false;
            }
            var saveKey = SaveManager.SAVE_KEY_PREFIX + slot;

            // 检查存档是否存在
            if (!sys.localStorage.getItem(saveKey)) {
              console.log("\uD83D\uDCED \u69FD\u4F4D " + slot + " \u6CA1\u6709\u5B58\u6863\uFF0C\u65E0\u9700\u5220\u9664");
              return true;
            }

            // 删除localStorage中的存档
            sys.localStorage.removeItem(saveKey);

            // 删除存档文件
            var fileKey = "save_file_slot_" + slot;
            sys.localStorage.removeItem(fileKey);

            // 更新存档列表
            SaveManager.updateSaveList(slot, null);
            console.log("\uD83D\uDDD1\uFE0F \u5DF2\u5220\u9664\u69FD\u4F4D " + slot + " \u7684\u5B58\u6863");
            console.log("\uD83D\uDDD1\uFE0F \u5DF2\u5220\u9664\u5B58\u6863\u6587\u4EF6: save/slot_" + slot + ".json");
            return true;
          } catch (error) {
            console.error("\u274C \u5220\u9664\u69FD\u4F4D " + slot + " \u5931\u8D25:", error);
            return false;
          }
        }

        /**
         * 获取所有存档槽位的信息
         * @returns 存档槽位数组
         */;
        SaveManager.getSaveSlots = function getSaveSlots() {
          var slots = [];
          for (var i = 1; i <= SaveManager.MAX_SAVE_SLOTS; i++) {
            var saveKey = SaveManager.SAVE_KEY_PREFIX + i;
            var saveDataStr = sys.localStorage.getItem(saveKey);
            if (saveDataStr) {
              try {
                var saveData = JSON.parse(saveDataStr);
                if (SaveManager.validateSaveData(saveData)) {
                  // 创建预览信息
                  var preview = SaveManager.createSavePreview(saveData);
                  slots.push({
                    id: i,
                    exists: true,
                    saveData: saveData,
                    preview: preview
                  });
                } else {
                  // 存档损坏
                  slots.push({
                    id: i,
                    exists: false
                  });
                }
              } catch (error) {
                console.error("\u274C \u8BFB\u53D6\u69FD\u4F4D " + i + " \u5B58\u6863\u5931\u8D25:", error);
                slots.push({
                  id: i,
                  exists: false
                });
              }
            } else {
              // 空槽位
              slots.push({
                id: i,
                exists: false
              });
            }
          }
          return slots;
        }

        /**
         * 检查指定槽位是否有存档
         * @param slot 存档槽位
         * @returns 是否存在存档
         */;
        SaveManager.hasSave = function hasSave(slot) {
          if (slot < 1 || slot > SaveManager.MAX_SAVE_SLOTS) {
            return false;
          }
          var saveKey = SaveManager.SAVE_KEY_PREFIX + slot;
          return !!sys.localStorage.getItem(saveKey);
        }

        /**
         * 获取最近的存档槽位
         * @returns 最近的存档槽位，没有则返回-1
         */;
        SaveManager.getLatestSaveSlot = function getLatestSaveSlot() {
          var latestSlot = -1;
          var latestTime = 0;
          for (var i = 1; i <= SaveManager.MAX_SAVE_SLOTS; i++) {
            var saveKey = SaveManager.SAVE_KEY_PREFIX + i;
            var saveDataStr = sys.localStorage.getItem(saveKey);
            if (saveDataStr) {
              try {
                var saveData = JSON.parse(saveDataStr);
                var saveTime = new Date(saveData.saveTime).getTime();
                if (saveTime > latestTime) {
                  latestTime = saveTime;
                  latestSlot = i;
                }
              } catch (error) {
                console.error("\u274C \u89E3\u6790\u69FD\u4F4D " + i + " \u65F6\u95F4\u5931\u8D25:", error);
              }
            }
          }
          return latestSlot;
        }

        /**
         * 清空所有存档
         */;
        SaveManager.clearAllSaves = function clearAllSaves() {
          try {
            for (var i = 1; i <= SaveManager.MAX_SAVE_SLOTS; i++) {
              var saveKey = SaveManager.SAVE_KEY_PREFIX + i;
              sys.localStorage.removeItem(saveKey);
            }

            // 清空存档列表
            sys.localStorage.removeItem(SaveManager.SAVE_LIST_KEY);
            console.log('🗑️ 已清空所有存档');
          } catch (error) {
            console.error('❌ 清空存档失败:', error);
          }
        }

        // ===== 🔧 私有工具方法 =====

        /**
         * 验证存档数据完整性
         */;
        SaveManager.validateSaveData = function validateSaveData(saveData) {
          return !!(saveData && typeof saveData.currentNode === 'string' && typeof saveData.currentChapter === 'number' && saveData.characters && saveData.gameFlags && saveData.saveTime && typeof saveData.playTime === 'number' && typeof saveData.saveSlot === 'number');
        }

        /**
         * 创建存档预览信息
         */;
        SaveManager.createSavePreview = function createSavePreview(saveData) {
          return {
            chapterTitle: "\u7B2C" + saveData.currentChapter + "\u7AE0",
            nodeTitle: saveData.currentNode,
            saveTime: saveData.saveTime,
            playTime: SaveManager.formatTime(saveData.playTime)
          };
        }

        /**
         * 更新存档列表
         */;
        SaveManager.updateSaveList = function updateSaveList(slot, saveData) {
          try {
            var saveList = [];
            var saveListStr = sys.localStorage.getItem(SaveManager.SAVE_LIST_KEY);
            if (saveListStr) {
              saveList = JSON.parse(saveListStr);
            }
            if (saveData) {
              // 添加或更新槽位
              if (saveList.indexOf(slot) === -1) {
                saveList.push(slot);
              }
            } else {
              // 删除槽位
              var index = saveList.indexOf(slot);
              if (index > -1) {
                saveList.splice(index, 1);
              }
            }
            sys.localStorage.setItem(SaveManager.SAVE_LIST_KEY, JSON.stringify(saveList));
          } catch (error) {
            console.error('❌ 更新存档列表失败:', error);
          }
        }

        /**
         * 格式化时间显示
         */;
        SaveManager.formatTime = function formatTime(seconds) {
          var hours = Math.floor(seconds / 3600);
          var minutes = Math.floor(seconds % 3600 / 60);
          var secs = seconds % 60;
          if (hours > 0) {
            return hours + "\u5C0F\u65F6" + minutes + "\u5206\u949F";
          } else if (minutes > 0) {
            return minutes + "\u5206\u949F" + secs + "\u79D2";
          } else {
            return secs + "\u79D2";
          }
        }

        /**
         * 重置游戏计时器（新游戏时调用）
         */;
        SaveManager.resetGameTimer = function resetGameTimer() {
          SaveManager.gameStartTime = Date.now();
          console.log('⏰ 游戏计时器已重置');
        }

        /**
         * 获取当前游戏时长
         */;
        SaveManager.getCurrentPlayTime = function getCurrentPlayTime() {
          return Math.floor((Date.now() - SaveManager.gameStartTime) / 1000);
        }

        /**
         * 导出存档数据（调试用）
         */;
        SaveManager.exportSaveData = function exportSaveData() {
          var allSaves = {};
          for (var i = 1; i <= SaveManager.MAX_SAVE_SLOTS; i++) {
            var saveKey = SaveManager.SAVE_KEY_PREFIX + i;
            var saveDataStr = sys.localStorage.getItem(saveKey);
            if (saveDataStr) {
              allSaves["slot_" + i] = JSON.parse(saveDataStr);
            }
          }
          return JSON.stringify(allSaves, null, 2);
        }

        /**
         * 生成存档文件到save文件夹
         * @param slot 存档槽位
         * @param saveData 存档数据
         */;
        SaveManager.generateSaveFile = function generateSaveFile(slot, saveData) {
          try {
            // 格式化存档数据为JSON字符串
            var saveJson = JSON.stringify(saveData, null, 2);

            // 在控制台输出存档文件内容（模拟文件生成）
            console.log("\uD83D\uDCC1 \u751F\u6210\u5B58\u6863\u6587\u4EF6: save/slot_" + slot + ".json");
            console.log("\uD83D\uDCC4 \u6587\u4EF6\u5185\u5BB9:", saveJson);

            // 在实际的桌面应用中，这里可以使用文件系统API写入真实文件
            // 在Web环境中，我们将存档信息保存到一个特殊的localStorage键中
            var fileKey = "save_file_slot_" + slot;
            sys.localStorage.setItem(fileKey, saveJson);
          } catch (error) {
            console.error('❌ 生成存档文件失败:', error);
          }
        }

        /**
         * 从save文件夹读取存档文件
         * @param slot 存档槽位
         * @returns 存档数据，失败返回null
         */;
        SaveManager.loadFromSaveFile = function loadFromSaveFile(slot) {
          try {
            var fileKey = "save_file_slot_" + slot;
            var saveJson = sys.localStorage.getItem(fileKey);
            if (saveJson) {
              console.log("\uD83D\uDCC1 \u4ECE\u5B58\u6863\u6587\u4EF6\u8BFB\u53D6: save/slot_" + slot + ".json");
              return JSON.parse(saveJson);
            }
            return null;
          } catch (error) {
            console.error('❌ 读取存档文件失败:', error);
            return null;
          }
        }

        /**
         * 获取游戏开始时间
         * @returns 游戏开始的时间戳
         */;
        SaveManager.getGameStartTime = function getGameStartTime() {
          if (SaveManager.gameStartTime === 0) {
            SaveManager.gameStartTime = Date.now();
          }
          return SaveManager.gameStartTime;
        };
        return SaveManager;
      }(), _class2.MAX_SAVE_SLOTS = 3, _class2.SAVE_KEY_PREFIX = 'romance_game_save_', _class2.SAVE_LIST_KEY = 'romance_game_save_list', _class2.GAME_VERSION = '1.0.0', _class2.SAVE_FOLDER = 'save', _class2.gameStartTime = 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SaveUIManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SaveManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Label, Component, SaveManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      SaveManager = module.SaveManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "35368K0CFZEGoLFK6xQNB11", "SaveUIManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SaveUIManager = exports('SaveUIManager', (_dec = ccclass('SaveUIManager'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Button), _dec12 = property(Button), _dec13 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SaveUIManager, _Component);
        function SaveUIManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "saveButton1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "saveButton2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "saveButton3", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadButton1", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadButton2", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadButton3", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "saveInfo1", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "saveInfo2", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "saveInfo3", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "deleteButton1", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "deleteButton2", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "deleteButton3", _descriptor12, _assertThisInitialized(_this));
          _this.gameController = null;
          return _this;
        }
        var _proto = SaveUIManager.prototype;
        // 可以是GameController或GameSceneController
        _proto.onLoad = function onLoad() {
          console.log('🚀 SaveUIManager onLoad');
        };
        _proto.start = function start() {
          this.debugComponents();
          this.setupButtons();

          // 初始化时先刷新显示以设置正确的按钮状态
          console.log('🚀 SaveUIManager 初始化完成，刷新显示');
          this.refreshDisplay();
        }

        // 调试方法：检查组件绑定状态
        ;

        _proto.debugComponents = function debugComponents() {
          console.log('=== SaveUIManager 组件绑定检查 ===');
          console.log('保存按钮1:', this.saveButton1 ? '✅ 已绑定' : '❌ 未绑定');
          console.log('保存按钮2:', this.saveButton2 ? '✅ 已绑定' : '❌ 未绑定');
          console.log('保存按钮3:', this.saveButton3 ? '✅ 已绑定' : '❌ 未绑定');
          console.log('加载按钮1:', this.loadButton1 ? '✅ 已绑定' : '❌ 未绑定');
          console.log('加载按钮2:', this.loadButton2 ? '✅ 已绑定' : '❌ 未绑定');
          console.log('加载按钮3:', this.loadButton3 ? '✅ 已绑定' : '❌ 未绑定');
          console.log('删除按钮1:', this.deleteButton1 ? '✅ 已绑定' : '❌ 未绑定');
          console.log('删除按钮2:', this.deleteButton2 ? '✅ 已绑定' : '❌ 未绑定');
          console.log('删除按钮3:', this.deleteButton3 ? '✅ 已绑定' : '❌ 未绑定');
          console.log('信息标签1:', this.saveInfo1 ? '✅ 已绑定' : '❌ 未绑定');
          console.log('信息标签2:', this.saveInfo2 ? '✅ 已绑定' : '❌ 未绑定');
          console.log('信息标签3:', this.saveInfo3 ? '✅ 已绑定' : '❌ 未绑定');
          console.log('GameController:', this.gameController ? '✅ 已设置' : '❌ 未设置');
          console.log('=====================================');
        };
        _proto.setGameController = function setGameController(controller) {
          this.gameController = controller;
          console.log('✅ GameController 已设置到 SaveUIManager');
        };
        _proto.setupButtons = function setupButtons() {
          var _this2 = this;
          console.log('🔧 开始设置按钮事件...');

          // 保存按钮事件
          if (this.saveButton1) {
            this.saveButton1.node.on('click', function () {
              _this2.playClickSound();
              console.log('🖱️ 点击了保存按钮1');
              _this2.saveToSlot(1);
            });
          }
          if (this.saveButton2) {
            this.saveButton2.node.on('click', function () {
              _this2.playClickSound();
              console.log('🖱️ 点击了保存按钮2');
              _this2.saveToSlot(2);
            });
          }
          if (this.saveButton3) {
            this.saveButton3.node.on('click', function () {
              _this2.playClickSound();
              console.log('🖱️ 点击了保存按钮3');
              _this2.saveToSlot(3);
            });
          }

          // 加载按钮事件
          if (this.loadButton1) {
            this.loadButton1.node.on('click', function () {
              _this2.playClickSound();
              console.log('🖱️ 点击了加载按钮1');
              _this2.loadFromSlot(1);
            });
          }
          if (this.loadButton2) {
            this.loadButton2.node.on('click', function () {
              _this2.playClickSound();
              console.log('🖱️ 点击了加载按钮2');
              _this2.loadFromSlot(2);
            });
          }
          if (this.loadButton3) {
            this.loadButton3.node.on('click', function () {
              _this2.playClickSound();
              console.log('🖱️ 点击了加载按钮3');
              _this2.loadFromSlot(3);
            });
          }

          // 删除按钮事件
          if (this.deleteButton1) {
            this.deleteButton1.node.on('click', function () {
              _this2.playClickSound();
              console.log('🖱️ 点击了删除按钮1');
              _this2.deleteSlot(1);
            });
          }
          if (this.deleteButton2) {
            this.deleteButton2.node.on('click', function () {
              _this2.playClickSound();
              console.log('🖱️ 点击了删除按钮2');
              _this2.deleteSlot(2);
            });
          }
          if (this.deleteButton3) {
            this.deleteButton3.node.on('click', function () {
              _this2.playClickSound();
              console.log('🖱️ 点击了删除按钮3');
              _this2.deleteSlot(3);
            });
          }
          console.log('✅ 按钮事件设置完成');
        };
        _proto.saveToSlot = function saveToSlot(slotId) {
          console.log("\uD83C\uDFAF \u5C1D\u8BD5\u4FDD\u5B58\u5230\u69FD\u4F4D " + slotId);
          console.log('GameController 状态:', this.gameController ? '✅ 存在' : '❌ 不存在');
          if (!this.gameController) {
            console.error('❌ GameController 未设置，无法保存游戏');
            return;
          }

          // 兼容两种控制器的属性访问
          var currentNode = this.gameController.currentNodeValue || this.gameController.currentNode;
          var currentChapter = this.gameController.currentChapterValue || this.gameController.currentChapter;
          var characters = this.gameController.charactersValue || this.gameController.characters;
          var gameFlags = this.gameController.gameFlagsValue || this.gameController.gameFlags;
          console.log('当前节点:', currentNode);
          console.log('当前章节:', currentChapter);
          console.log('角色数据:', characters);
          console.log('游戏标记:', gameFlags);
          var success = SaveManager.saveGame(slotId, currentNode, currentChapter, characters, gameFlags);
          if (success) {
            console.log("\u2705 \u6E38\u620F\u5DF2\u4FDD\u5B58\u5230\u69FD\u4F4D " + slotId);
            this.refreshDisplay();
          } else {
            console.error("\u274C \u4FDD\u5B58\u5230\u69FD\u4F4D " + slotId + " \u5931\u8D25");
          }
        };
        _proto.loadFromSlot = function loadFromSlot(slotId) {
          console.log("\uD83C\uDFAF \u5C1D\u8BD5\u4ECE\u69FD\u4F4D " + slotId + " \u52A0\u8F7D\u6E38\u620F");
          var saveData = SaveManager.loadGame(slotId);
          console.log('加载的存档数据:', saveData);
          if (saveData && this.gameController) {
            this.gameController.loadFromSaveData(saveData);
            console.log("\u2705 \u4ECE\u69FD\u4F4D " + slotId + " \u52A0\u8F7D\u6E38\u620F\u6210\u529F");
          } else {
            if (!saveData) {
              console.log("\u274C \u69FD\u4F4D " + slotId + " \u6CA1\u6709\u5B58\u6863\u6570\u636E");
            }
            if (!this.gameController) {
              console.error('❌ GameController 未设置，无法加载游戏');
            }
          }
        };
        _proto.refreshDisplay = function refreshDisplay() {
          console.log('🔄 刷新存档显示...');
          this.updateSlotDisplay(1, this.saveInfo1, this.loadButton1, this.saveButton1, this.deleteButton1);
          this.updateSlotDisplay(2, this.saveInfo2, this.loadButton2, this.saveButton2, this.deleteButton2);
          this.updateSlotDisplay(3, this.saveInfo3, this.loadButton3, this.saveButton3, this.deleteButton3);
        };
        _proto.updateSlotDisplay = function updateSlotDisplay(slotId, infoLabel, loadButton, saveButton, deleteButton) {
          if (!infoLabel || !loadButton || !saveButton) {
            console.log("\u26A0\uFE0F \u69FD\u4F4D " + slotId + " \u7684\u6807\u7B7E\u6216\u6309\u94AE\u672A\u7ED1\u5B9A");
            return;
          }
          var saveData = SaveManager.loadGame(slotId);
          if (saveData) {
            // 存档存在时显示详细信息（与start场景保持一致）
            var playTimeMin = Math.floor(saveData.playTime / 60);
            var playTimeSec = saveData.playTime % 60;
            var timeStr = playTimeMin + ":" + (playTimeSec < 10 ? '0' : '') + playTimeSec;
            var displayText = ["\u7B2C" + saveData.currentChapter + "\u7AE0", "\u6E38\u620F\u65F6\u957F: " + timeStr, "\u4FDD\u5B58\u65F6\u95F4: " + saveData.saveTime].join('\n');
            infoLabel.string = displayText;
            loadButton.interactable = true;

            // 有存档时，保存按钮禁用（防止覆盖）
            saveButton.interactable = false;

            // 启用删除按钮
            if (deleteButton) {
              deleteButton.interactable = true;
              deleteButton.node.active = true;
            }
            console.log("\uD83D\uDCDD \u69FD\u4F4D " + slotId + " \u663E\u793A\u8BE6\u7EC6\u4FE1\u606F: " + displayText.replace(/\n/g, ' | '));
          } else {
            // 空槽位显示
            infoLabel.string = "空槽位\n暂无存档";
            loadButton.interactable = false;

            // 空槽位时，保存按钮启用
            saveButton.interactable = true;

            // 禁用删除按钮
            if (deleteButton) {
              deleteButton.interactable = false;
              deleteButton.node.active = false;
            }
            console.log("\uD83D\uDCDD \u69FD\u4F4D " + slotId + " \u663E\u793A: \u7A7A\u69FD\u4F4D");
          }
        };
        _proto.deleteSlot = function deleteSlot(slotId) {
          console.log("\uD83D\uDDD1\uFE0F \u5C1D\u8BD5\u5220\u9664\u69FD\u4F4D " + slotId);

          // 确认删除操作
          var saveData = SaveManager.loadGame(slotId);
          if (saveData) {
            // 在实际项目中可以添加确认对话框
            var success = SaveManager.deleteSave(slotId);
            if (success) {
              this.refreshDisplay();
              console.log("\u2705 \u5220\u9664\u69FD\u4F4D " + slotId + " \u7684\u5B58\u6863\u6210\u529F");
            } else {
              console.error("\u274C \u5220\u9664\u69FD\u4F4D " + slotId + " \u5931\u8D25");
            }
          } else {
            console.log("\u26A0\uFE0F \u69FD\u4F4D " + slotId + " \u6CA1\u6709\u5B58\u6863\u53EF\u5220\u9664");
          }
        }

        // 简单的删除功能（长按保存按钮3秒删除）
        ;

        _proto.deleteSave = function deleteSave(slotId) {
          SaveManager.deleteSave(slotId);
          this.refreshDisplay();
          console.log("\uD83D\uDDD1\uFE0F \u5220\u9664\u69FD\u4F4D " + slotId + " \u7684\u5B58\u6863");
        }

        /**
         * 设置所有保存按钮的启用/禁用状态
         * 注意：现在保存按钮状态由各槽位单独控制（有存档时禁用，无存档时启用）
         * 此方法主要用于游戏开始时的初始化
         * @param enabled true为启用，false为禁用
         */;
        _proto.setSaveButtonsEnabled = function setSaveButtonsEnabled(enabled) {
          console.log("\uD83C\uDFAE \u8BBE\u7F6E\u4FDD\u5B58\u6309\u94AE\u521D\u59CB\u72B6\u6001: " + (enabled ? '启用' : '禁用'));
          console.log("\uD83D\uDCA1 \u6CE8\u610F\uFF1A\u4FDD\u5B58\u6309\u94AE\u7684\u6700\u7EC8\u72B6\u6001\u5C06\u7531refreshDisplay()\u6839\u636E\u69FD\u4F4D\u60C5\u51B5\u5355\u72EC\u63A7\u5236");

          // 不再在这里设置按钮状态，完全交给refreshDisplay()控制
          console.log("\uD83D\uDD04 \u8DF3\u8FC7\u7EDF\u4E00\u8BBE\u7F6E\uFF0C\u7B49\u5F85refreshDisplay()\u8C03\u7528\u4EE5\u5E94\u7528\u6B63\u786E\u7684\u69FD\u4F4D\u903B\u8F91");
        }

        // 🔊 播放点击音效
        ;

        _proto.playClickSound = function playClickSound() {
          if (this.gameController && this.gameController.playSound) {
            this.gameController.playSound('ui_click');
          }
        }

        /**
         * 获取当前保存按钮是否启用
         * @returns 保存按钮是否启用
         */;
        _proto.getSaveButtonsEnabled = function getSaveButtonsEnabled() {
          var _this$saveButton1$int, _this$saveButton;
          return (_this$saveButton1$int = (_this$saveButton = this.saveButton1) == null ? void 0 : _this$saveButton.interactable) != null ? _this$saveButton1$int : false;
        };
        return SaveUIManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "saveButton1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "saveButton2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "saveButton3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "loadButton1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "loadButton2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "loadButton3", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "saveInfo1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "saveInfo2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "saveInfo3", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "deleteButton1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "deleteButton2", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "deleteButton3", [_dec13], {
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

System.register("chunks:///_virtual/SceneManager.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, director, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      sys = module.sys;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "ae846P5lEhMeZicxuHmpRge", "SceneManager", undefined);
      var ccclass = _decorator.ccclass;

      /**
       * 🎬 场景管理器
       * 负责处理场景之间的跳转和数据传递
       */
      var SceneManager = exports('SceneManager', (_dec = ccclass('SceneManager'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function SceneManager() {}
        /**
         * 跳转到开始场景
         */
        SceneManager.loadStartScene = function loadStartScene() {
          console.log('🎬 正在跳转到开始场景...');
          director.loadScene(this.SCENE_START, function () {
            console.log('✅ 开始场景加载完成');
          });
        }

        /**
         * 从存档加载到游戏场景
         * @param saveData 存档数据
         */;
        SceneManager.loadGameSceneFromSave = function loadGameSceneFromSave(saveData) {
          console.log('🎬 正在从存档跳转到游戏场景...');

          // 临时存储存档数据，供游戏场景读取
          this.setTempSaveData(saveData);
          director.loadScene(this.SCENE_GAME, function () {
            console.log('✅ 游戏场景加载完成（从存档）');
          });
        }

        /**
         * 新游戏跳转到游戏场景
         */;
        SceneManager.loadGameSceneNewGame = function loadGameSceneNewGame() {
          console.log('🎬 正在新游戏跳转到游戏场景...');

          // 清除临时存档数据
          this.clearTempSaveData();
          director.loadScene(this.SCENE_GAME, function () {
            console.log('✅ 游戏场景加载完成（新游戏）');
          });
        }

        /**
         * 跳转到分支场景
         */;
        SceneManager.loadBranchScene = function loadBranchScene() {
          console.log('🎬 正在跳转到分支场景...');
          director.loadScene(this.SCENE_BRANCH, function () {
            console.log('✅ 分支场景加载完成');
          });
        }

        /**
         * 设置临时存档数据
         * @param saveData 存档数据
         */;
        SceneManager.setTempSaveData = function setTempSaveData(saveData) {
          sys.localStorage.setItem(this.TEMP_SAVE_DATA_KEY, JSON.stringify(saveData));
          console.log('💾 临时存档数据已设置');
        }

        /**
         * 获取临时存档数据
         * @returns 存档数据或null
         */;
        SceneManager.getTempSaveData = function getTempSaveData() {
          var dataStr = sys.localStorage.getItem(this.TEMP_SAVE_DATA_KEY);
          if (dataStr) {
            try {
              var saveData = JSON.parse(dataStr);
              console.log('📂 获取到临时存档数据');
              return saveData;
            } catch (error) {
              console.error('❌ 临时存档数据解析失败:', error);
              return null;
            }
          }
          return null;
        }

        /**
         * 清除临时存档数据
         */;
        SceneManager.clearTempSaveData = function clearTempSaveData() {
          sys.localStorage.removeItem(this.TEMP_SAVE_DATA_KEY);
          console.log('🗑️ 临时存档数据已清除');
        }

        /**
         * 返回到开始场景（从游戏场景）
         */;
        SceneManager.returnToStartScene = function returnToStartScene() {
          console.log('🎬 正在返回开始场景...');

          // 清除临时数据
          this.clearTempSaveData();
          director.loadScene(this.SCENE_START, function () {
            console.log('✅ 返回开始场景完成');
          });
        }

        /**
         * 获取当前场景名称
         */;
        SceneManager.getCurrentSceneName = function getCurrentSceneName() {
          var _director$getScene;
          return ((_director$getScene = director.getScene()) == null ? void 0 : _director$getScene.name) || 'unknown';
        }

        /**
         * 检查是否为开始场景
         */;
        SceneManager.isStartScene = function isStartScene() {
          return this.getCurrentSceneName() === this.SCENE_START;
        }

        /**
         * 检查是否为游戏场景
         */;
        SceneManager.isGameScene = function isGameScene() {
          return this.getCurrentSceneName() === this.SCENE_GAME;
        };
        return SceneManager;
      }(), _class2.SCENE_START = 'start', _class2.SCENE_GAME = 'game', _class2.SCENE_BRANCH = 'branch', _class2.TEMP_SAVE_DATA_KEY = 'tempSaveDataForSceneTransition', _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SettingsPanelController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './VolumeManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, AudioSource, Slider, resources, AudioClip, Component, VolumeManager;
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
      Button = module.Button;
      AudioSource = module.AudioSource;
      Slider = module.Slider;
      resources = module.resources;
      AudioClip = module.AudioClip;
      Component = module.Component;
    }, function (module) {
      VolumeManager = module.VolumeManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "f3823pOvG5LcqIt/l59pejT", "SettingsPanelController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SettingsPanelController = exports('SettingsPanelController', (_dec = ccclass('SettingsPanelController'), _dec2 = property({
        type: Node,
        tooltip: "设置面板节点"
      }), _dec3 = property({
        type: Button,
        tooltip: "打开设置面板按钮"
      }), _dec4 = property({
        type: Button,
        tooltip: "关闭设置面板按钮"
      }), _dec5 = property({
        type: AudioSource,
        tooltip: "音效播放组件"
      }), _dec6 = property({
        type: AudioSource,
        tooltip: "背景音乐播放组件"
      }), _dec7 = property({
        type: Slider,
        tooltip: "背景音乐音量滑动器"
      }), _dec8 = property({
        type: Slider,
        tooltip: "音效音量滑动器"
      }), _dec9 = property({
        type: Slider,
        tooltip: "视频音量滑动器"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SettingsPanelController, _Component);
        function SettingsPanelController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "settingsPanel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openButton", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeButton", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfxSource", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgmSource", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgmVolumeSlider", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfxVolumeSlider", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "videoVolumeSlider", _descriptor8, _assertThisInitialized(_this));
          // 🎵 音频资源
          _this.uiClickClip = null;
          return _this;
        }
        var _proto = SettingsPanelController.prototype;
        _proto.start = function start() {
          // 初始化面板为隐藏状态
          if (this.settingsPanel) {
            this.settingsPanel.active = false;
          }

          // 绑定按钮事件
          if (this.openButton) {
            this.openButton.node.on(Button.EventType.CLICK, this.openSettingsPanel, this);
          }
          if (this.closeButton) {
            this.closeButton.node.on(Button.EventType.CLICK, this.closeSettingsPanel, this);
          }

          // 绑定滑动器事件
          this.initializeSliders();

          // 加载音效
          this.loadAudioClips();

          // 应用保存的音量设置
          this.applyVolumeSettings();
        }

        /**
         * 初始化滑动器
         */;
        _proto.initializeSliders = function initializeSliders() {
          // 绑定背景音乐音量滑动器
          if (this.bgmVolumeSlider) {
            this.bgmVolumeSlider.node.on('slide', this.onBgmVolumeChange, this);
          }

          // 绑定音效音量滑动器
          if (this.sfxVolumeSlider) {
            this.sfxVolumeSlider.node.on('slide', this.onSfxVolumeChange, this);
          }

          // 绑定视频音量滑动器
          if (this.videoVolumeSlider) {
            this.videoVolumeSlider.node.on('slide', this.onVideoVolumeChange, this);
          }
        }

        /**
         * 应用音量设置
         */;
        _proto.applyVolumeSettings = function applyVolumeSettings() {
          // 获取保存的音量值
          var bgmVolume = VolumeManager.getBgmVolume();
          var sfxVolume = VolumeManager.getSfxVolume();
          var videoVolume = VolumeManager.getVideoVolume();

          // 设置滑动器位置
          if (this.bgmVolumeSlider) {
            this.bgmVolumeSlider.progress = bgmVolume;
          }
          if (this.sfxVolumeSlider) {
            this.sfxVolumeSlider.progress = sfxVolume;
          }
          if (this.videoVolumeSlider) {
            this.videoVolumeSlider.progress = videoVolume;
          }

          // 应用音量到AudioSource
          VolumeManager.applyAllVolumes(this.bgmSource, this.sfxSource);
          console.log("\uD83D\uDD0A \u8BBE\u7F6E\u9762\u677F\u97F3\u91CF\u52A0\u8F7D\u5B8C\u6210 - BGM: " + Math.round(bgmVolume * 100) + "%, SFX: " + Math.round(sfxVolume * 100) + "%, VIDEO: " + Math.round(videoVolume * 100) + "%");
        }

        /**
         * 背景音乐音量改变回调
         */;
        _proto.onBgmVolumeChange = function onBgmVolumeChange(slider) {
          var volume = slider.progress;

          // 保存并应用音量
          VolumeManager.setBgmVolume(volume);
          VolumeManager.applyBgmVolume(this.bgmSource);
        }

        /**
         * 音效音量改变回调
         */;
        _proto.onSfxVolumeChange = function onSfxVolumeChange(slider) {
          var volume = slider.progress;

          // 保存并应用音量
          VolumeManager.setSfxVolume(volume);
          VolumeManager.applySfxVolume(this.sfxSource);

          // 播放测试音效
          this.playSound('ui_click');
        }

        /**
         * 视频音量改变回调
         */;
        _proto.onVideoVolumeChange = function onVideoVolumeChange(slider) {
          var volume = slider.progress;

          // 保存视频音量
          VolumeManager.setVideoVolume(volume);
          console.log("\uD83C\uDFAC \u89C6\u9891\u97F3\u91CF\u8C03\u8282\u4E3A: " + Math.round(volume * 100) + "%");
          // 注意：这里不能直接应用到VideoPlayer，因为视频组件在游戏场景中
          // 当游戏场景启动时会自动应用保存的设置
        }

        /**
         * 加载音频资源
         */;
        _proto.loadAudioClips = function loadAudioClips() {
          var _this2 = this;
          if (!this.sfxSource) {
            console.warn('⚠️ SettingsPanelController 音效组件未设置');
            return;
          }

          // 加载UI点击音效
          resources.load('audio/sfx/ui-click', AudioClip, function (err, clip) {
            if (err) {
              console.error('❌ SettingsPanelController UI点击音效加载失败:', err);
              return;
            }
            _this2.uiClickClip = clip;
            console.log('✅ SettingsPanelController UI点击音效加载完成');
          });
        }

        /**
         * 播放音效
         */;
        _proto.playSound = function playSound(soundName) {
          if (!this.sfxSource) return;
          switch (soundName) {
            case 'ui_click':
              if (this.uiClickClip) {
                this.sfxSource.playOneShot(this.uiClickClip, 1.0);
              }
              break;
          }
        }

        /**
         * 打开设置面板
         */;
        _proto.openSettingsPanel = function openSettingsPanel() {
          this.playSound('ui_click');
          console.log('打开设置面板');
          if (this.settingsPanel) {
            this.settingsPanel.active = true;
          }
        }

        /**
         * 关闭设置面板
         */;
        _proto.closeSettingsPanel = function closeSettingsPanel() {
          this.playSound('ui_click');
          console.log('关闭设置面板');
          if (this.settingsPanel) {
            this.settingsPanel.active = false;
          }
        }

        /**
         * 切换面板显示状态（额外功能）
         */;
        _proto.toggleSettingsPanel = function toggleSettingsPanel() {
          this.playSound('ui_click');
          if (this.settingsPanel) {
            this.settingsPanel.active = !this.settingsPanel.active;
            console.log('切换设置面板状态:', this.settingsPanel.active ? '显示' : '隐藏');
          }
        }

        /**
         * 重置音量设置到默认值
         */;
        _proto.resetVolumeSettings = function resetVolumeSettings() {
          VolumeManager.resetToDefault();

          // 更新滑动器位置
          var defaultVolume = 0.7;
          if (this.bgmVolumeSlider) {
            this.bgmVolumeSlider.progress = defaultVolume;
          }
          if (this.sfxVolumeSlider) {
            this.sfxVolumeSlider.progress = defaultVolume;
          }
          if (this.videoVolumeSlider) {
            this.videoVolumeSlider.progress = defaultVolume;
          }

          // 应用音量
          VolumeManager.applyAllVolumes(this.bgmSource, this.sfxSource);
          console.log('🔄 音量设置已重置为默认值 70%（包含视频音量）');
          this.playSound('ui_click');
        };
        return SettingsPanelController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "settingsPanel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "openButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "closeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sfxSource", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bgmSource", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bgmVolumeSlider", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sfxVolumeSlider", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "videoVolumeSlider", [_dec9], {
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

System.register("chunks:///_virtual/SimpleAudioTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioSource, resources, AudioClip, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      resources = module.resources;
      AudioClip = module.AudioClip;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f0e3cueibRNTbZcj//7yjDW", "SimpleAudioTest", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 🎵 简单音频测试脚本
       * 用于测试音频播放功能是否正常
       */
      var SimpleAudioTest = exports('SimpleAudioTest', (_dec = ccclass('SimpleAudioTest'), _dec2 = property(AudioSource), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SimpleAudioTest, _Component);
        function SimpleAudioTest() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "audioSource", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SimpleAudioTest.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          console.log('🎵 SimpleAudioTest 组件初始化...');

          // 延迟1秒后开始测试音频
          this.scheduleOnce(function () {
            _this2.testAudio();
          }, 1.0);
        }

        /**
         * 测试音频播放
         */;
        _proto.testAudio = function testAudio() {
          console.log('🎵 开始测试音频播放...');
          if (!this.audioSource) {
            console.error('❌ audioSource 组件未设置');
            return;
          }

          // 加载并播放音频
          this.loadAndPlayAudio();
        }

        /**
         * 加载并播放音频
         */;
        _proto.loadAndPlayAudio = function loadAndPlayAudio() {
          var _this3 = this;
          console.log('📥 正在加载音频: audio/bgm/school-bgm');
          resources.load('audio/bgm/school-bgm', AudioClip, function (err, clip) {
            if (err) {
              console.error('❌ 音频加载失败:', err);
              return;
            }
            console.log('✅ 音频加载成功:', clip);
            console.log('  - 音频名称:', clip.name);
            console.log('  - 音频UUID:', clip._uuid);

            // 播放音频
            _this3.playAudio(clip);
          });
        }

        /**
         * 播放音频
         */;
        _proto.playAudio = function playAudio(clip) {
          var _this4 = this;
          try {
            // 配置音频源
            this.audioSource.clip = clip;
            this.audioSource.loop = true;
            this.audioSource.volume = 0.5;
            console.log('🔧 音频源配置完成');
            console.log('  - clip:', this.audioSource.clip);
            console.log('  - loop:', this.audioSource.loop);
            console.log('  - volume:', this.audioSource.volume);

            // 播放音频
            this.audioSource.play();
            console.log('✅ 音频开始播放');
            console.log('  - 播放状态:', this.audioSource.playing);

            // 检查播放状态
            this.scheduleOnce(function () {
              console.log('🔍 播放状态检查:');
              console.log('  - 播放状态:', _this4.audioSource.playing);
              console.log('  - 当前时间:', _this4.audioSource.currentTime);
              console.log('  - 音量:', _this4.audioSource.volume);
            }, 0.5);
          } catch (error) {
            console.error('❌ 播放音频时发生错误:', error);
          }
        }

        /**
         * 停止音频播放
         */;
        _proto.stopAudio = function stopAudio() {
          if (this.audioSource && this.audioSource.playing) {
            this.audioSource.stop();
            console.log('🔇 音频已停止');
          }
        };
        return SimpleAudioTest;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec2], {
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

System.register("chunks:///_virtual/StartSceneAchievementIntegration.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AchievementManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, AchievementManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      AchievementManager = module.AchievementManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "0417fdkE/lCQZg+s1FPb+7u", "StartSceneAchievementIntegration", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var StartSceneAchievementIntegration = exports('StartSceneAchievementIntegration', (_dec = ccclass('StartSceneAchievementIntegration'), _dec2 = property({
        type: AchievementManager,
        tooltip: '成就管理器'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StartSceneAchievementIntegration, _Component);
        function StartSceneAchievementIntegration() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "achievementManager", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = StartSceneAchievementIntegration.prototype;
        _proto.start = function start() {
          this.initializeAchievementSystem();
        }

        /**
         * 初始化成就系统
         */;
        _proto.initializeAchievementSystem = function initializeAchievementSystem() {
          console.log('[StartSceneAchievementIntegration] 初始化成就系统');
          if (this.achievementManager) {
            // 可以在这里添加一些初始化逻辑
            console.log('[StartSceneAchievementIntegration] 成就管理器已准备就绪');
          } else {
            console.warn('[StartSceneAchievementIntegration] 成就管理器未设置');
          }
        }

        /**
         * 测试解锁成就（用于调试）
         */;
        _proto.testUnlockAchievement = function testUnlockAchievement(achievementId) {
          if (this.achievementManager) {
            this.achievementManager.unlockAchievement(achievementId);
          }
        }

        /**
         * 测试好感度成就（用于调试）
         */;
        _proto.testAffectionAchievement = function testAffectionAchievement(character, affection) {
          if (this.achievementManager) {
            this.achievementManager.checkAffectionAchievements(character, affection);
          }
        }

        /**
         * 获取成就管理器
         */;
        _proto.getAchievementManager = function getAchievementManager() {
          return this.achievementManager;
        };
        return StartSceneAchievementIntegration;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "achievementManager", [_dec2], {
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

System.register("chunks:///_virtual/StartSceneController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SceneManager.ts', './LoadGameUIManager.ts', './VolumeManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioSource, Node, Button, resources, AudioClip, sys, game, Component, SceneManager, LoadGameUIManager, VolumeManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      Node = module.Node;
      Button = module.Button;
      resources = module.resources;
      AudioClip = module.AudioClip;
      sys = module.sys;
      game = module.game;
      Component = module.Component;
    }, function (module) {
      SceneManager = module.SceneManager;
    }, function (module) {
      LoadGameUIManager = module.LoadGameUIManager;
    }, function (module) {
      VolumeManager = module.VolumeManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "e5a0b18HytMmo1jN5sgGzL0", "StartSceneController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 🎮 开始场景控制器
       * 负责处理开始界面的所有逻辑
       */
      var StartSceneController = exports('StartSceneController', (_dec = ccclass('StartSceneController'), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(Button), _dec10 = property(Button), _dec11 = property(LoadGameUIManager), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StartSceneController, _Component);
        function StartSceneController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // 🎵 音频组件
          _initializerDefineProperty(_this, "sfxSource", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgmSource", _descriptor2, _assertThisInitialized(_this));
          // 📱 UI面板
          _initializerDefineProperty(_this, "mainMenuPanel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadGamePanel", _descriptor4, _assertThisInitialized(_this));
          // 🏠 主菜单按钮
          _initializerDefineProperty(_this, "newGameButton", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadGameButton", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "settingsButton", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "exitButton", _descriptor8, _assertThisInitialized(_this));
          // 📂 读档面板按钮
          _initializerDefineProperty(_this, "backButton", _descriptor9, _assertThisInitialized(_this));
          // 💾 读档UI管理器
          _initializerDefineProperty(_this, "loadGameUIManager", _descriptor10, _assertThisInitialized(_this));
          // 🎵 音频资源
          _this.uiClickClip = null;
          return _this;
        }
        var _proto = StartSceneController.prototype;
        _proto.onLoad = function onLoad() {
          console.log('🎮 开始场景控制器初始化...');
          this.initializeAudio();
          this.initializeUI();
          this.bindButtonEvents();
        };
        _proto.start = function start() {
          console.log('🎮 StartSceneController.start() 被调用');

          // 🔊 应用保存的音量设置
          this.applyVolumeSettings();

          // 显示主菜单
          this.showMainMenu();

          // 检查音频组件状态
          console.log('🔍 检查音频组件状态:');
          console.log('  - sfxSource:', this.sfxSource);
          console.log('  - bgmSource:', this.bgmSource);
          console.log('  - uiClickClip:', this.uiClickClip);
          console.log('✅ 开始场景初始化完成');
        }

        /**
         * 🔊 应用保存的音量设置
         */;
        _proto.applyVolumeSettings = function applyVolumeSettings() {
          console.log('🔊 开始应用开始场景音量设置...');

          // 应用音量到AudioSource组件
          VolumeManager.applyAllVolumes(this.bgmSource, this.sfxSource);

          // 打印当前音量设置
          VolumeManager.logCurrentVolumes();
          console.log('✅ 开始场景音量设置应用完成');
        }

        /**
         * 初始化音频
         */;
        _proto.initializeAudio = function initializeAudio() {
          var _this2 = this;
          console.log('🎵 开始初始化音频...');
          console.log('  - sfxSource存在:', !!this.sfxSource);
          if (!this.sfxSource) {
            console.warn('⚠️ 音效组件未设置');
            return;
          }

          // 加载UI点击音效
          console.log('📥 正在加载UI点击音效: audio/sfx/ui-click');
          resources.load('audio/sfx/ui-click', AudioClip, function (err, clip) {
            if (err) {
              console.error('❌ UI点击音效加载失败:', err);
              return;
            }
            _this2.uiClickClip = clip;
            console.log('✅ UI点击音效加载完成:', clip);
            console.log('  - 音频名称:', clip.name);
            console.log('  - 音频UUID:', clip._uuid);
          });
        }

        /**
         * 初始化UI
         */;
        _proto.initializeUI = function initializeUI() {
          // 初始化读档UI管理器
          if (this.loadGameUIManager) {
            this.loadGameUIManager.setStartSceneController(this);
            console.log('💾 读档UI管理器初始化完成');
          }
        }

        /**
         * 绑定按钮事件
         */;
        _proto.bindButtonEvents = function bindButtonEvents() {
          var _this3 = this;
          // 新游戏按钮
          if (this.newGameButton) {
            this.newGameButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.startNewGame();
            }, this);
          }

          // 读取存档按钮
          if (this.loadGameButton) {
            this.loadGameButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.showLoadGamePanel();
            }, this);
          }

          // 设置按钮
          if (this.settingsButton) {
            this.settingsButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.showSettings();
            }, this);
          }

          // 退出按钮
          if (this.exitButton) {
            this.exitButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.exitGame();
            }, this);
          }

          // 返回按钮（从读档面板返回主菜单面板）
          if (this.backButton) {
            this.backButton.node.on('click', function () {
              _this3.playSound('ui_click');
              _this3.showMainMenu();
            }, this);
          }
          console.log('🔘 按钮事件绑定完成');
        }

        /**
         * 显示主菜单
         */;
        _proto.showMainMenu = function showMainMenu() {
          // 隐藏读档面板，显示主菜单面板
          if (this.loadGamePanel) {
            this.loadGamePanel.active = false;
          }
          if (this.mainMenuPanel) {
            this.mainMenuPanel.active = true;
          }
          console.log('🏠 显示主菜单');
        }

        /**
         * 显示读档面板
         */;
        _proto.showLoadGamePanel = function showLoadGamePanel() {
          // 只隐藏读档面板，保持主菜单面板显示
          if (this.loadGamePanel) {
            this.loadGamePanel.active = true;
          }

          // 刷新存档列表
          if (this.loadGameUIManager) {
            this.loadGameUIManager.refreshSaveSlots();
          }
          console.log('📂 显示读档面板（主菜单保持显示）');
        }

        /**
         * 隐藏所有面板
         */;
        _proto.hideAllPanels = function hideAllPanels() {
          if (this.mainMenuPanel) {
            this.mainMenuPanel.active = false;
          }
          if (this.loadGamePanel) {
            this.loadGamePanel.active = false;
          }
        }

        /**
         * 开始新游戏
         */;
        _proto.startNewGame = function startNewGame() {
          console.log('🆕 开始新游戏');

          // 跳转到游戏场景
          SceneManager.loadGameSceneNewGame();
        }

        /**
         * 从存档加载游戏
         * @param saveData 存档数据
         */;
        _proto.loadGameFromSave = function loadGameFromSave(saveData) {
          console.log('📂 从存档加载游戏');

          // 跳转到游戏场景
          SceneManager.loadGameSceneFromSave(saveData);
        }

        /**
         * 显示分支查看界面
         */;
        _proto.showBranchView = function showBranchView() {
          console.log('🌳 显示分支查看界面');

          // 跳转到分支场景
          SceneManager.loadBranchScene();
        }

        /**
         * 显示设置界面
         */;
        _proto.showSettings = function showSettings() {
          console.log('⚙️ 显示设置界面');
          // TODO: 实现设置界面
        }

        /**
         * 退出游戏
         */;
        _proto.exitGame = function exitGame() {
          console.log('👋 退出游戏');

          // 在移动端显示确认对话框
          if (sys.isMobile) {
            // 移动端直接退出
            game.end();
          } else {
            // 桌面端显示确认对话框
            if (confirm('确定要退出游戏吗？')) {
              game.end();
            }
          }
        }

        /**
         * 播放音效
         * @param soundName 音效名称
         */;
        _proto.playSound = function playSound(soundName) {
          if (!this.sfxSource) return;
          switch (soundName) {
            case 'ui_click':
              if (this.uiClickClip) {
                this.sfxSource.playOneShot(this.uiClickClip, 0.7);
              }
              break;
          }
        };
        return StartSceneController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sfxSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgmSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mainMenuPanel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "loadGamePanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "newGameButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "loadGameButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "settingsButton", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "exitButton", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "backButton", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "loadGameUIManager", [_dec11], {
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

System.register("chunks:///_virtual/StartSceneIntegration.ts", ['cc', './AchievementData.ts', './AchievementConfig.ts'], function (exports) {
  var cclegacy, _decorator, AchievementData, Heroine, AchievementConfig;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      AchievementData = module.AchievementData;
      Heroine = module.Heroine;
    }, function (module) {
      AchievementConfig = module.AchievementConfig;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "b9e54Qy5KRHcbJtpqdz6f8d", "StartSceneIntegration", undefined);
      var ccclass = _decorator.ccclass;

      /**
       * Start场景成就系统集成类
       * 负责将游戏中的成就数据同步到start场景的成就系统
       */
      var StartSceneIntegration = exports('StartSceneIntegration', (_dec = ccclass('StartSceneIntegration'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function StartSceneIntegration() {}
        /**
         * 获取单例实例
         */
        StartSceneIntegration.getInstance = function getInstance() {
          if (!StartSceneIntegration.instance) {
            StartSceneIntegration.instance = new StartSceneIntegration();
          }
          return StartSceneIntegration.instance;
        }

        /**
         * 同步游戏成就数据到start场景成就系统
         */;
        var _proto = StartSceneIntegration.prototype;
        _proto.syncToStartScene = function syncToStartScene() {
          try {
            var gameAchievementData = AchievementData.getInstance();
            var startSceneAchievements = AchievementConfig.getAchievementData();

            // 映射游戏成就ID到start场景成就ID
            var idMapping = {
              'affection_yaxin_max': 'affection_yaxin_max',
              'affection_xiaomeng_max': 'affection_xiaomeng_max',
              'affection_jingyi_max': 'affection_jingyi_max'
            };
            var hasChanges = false;

            // 遍历映射，同步解锁状态
            for (var gameId in idMapping) {
              var startId = idMapping[gameId];
              var gameProgress = gameAchievementData.getAchievementProgress(gameId);
              var startAchievement = null;
              for (var i = 0; i < startSceneAchievements.length; i++) {
                if (startSceneAchievements[i].id === startId) {
                  startAchievement = startSceneAchievements[i];
                  break;
                }
              }
              if (gameProgress && startAchievement) {
                // 如果游戏中已解锁但start场景中未解锁，则同步
                if (gameProgress.isUnlocked && !startAchievement.isUnlocked) {
                  var _gameProgress$unlocke;
                  startAchievement.isUnlocked = true;
                  startAchievement.unlockTime = ((_gameProgress$unlocke = gameProgress.unlockedAt) == null ? void 0 : _gameProgress$unlocke.getTime()) || Date.now();
                  hasChanges = true;
                  console.log("\u2705 [StartSceneIntegration] \u540C\u6B65\u6210\u5C31\u89E3\u9501: " + startAchievement.name);
                }

                // 同步进度
                if (gameProgress.currentProgress !== undefined) {
                  startAchievement.unlockCondition.current = gameProgress.currentProgress;
                }
              }
            }

            // 如果有变化，保存到start场景的存储系统
            if (hasChanges) {
              AchievementConfig.saveToStorage(startSceneAchievements);
              console.log('💾 [StartSceneIntegration] 成就数据已同步到start场景');
            }
          } catch (error) {
            console.error('❌ [StartSceneIntegration] 同步成就数据失败:', error);
          }
        }

        /**
         * 从start场景加载成就数据到游戏系统
         */;
        _proto.loadFromStartScene = function loadFromStartScene() {
          try {
            var gameAchievementData = AchievementData.getInstance();
            var startSceneAchievements = AchievementConfig.getAchievementData();

            // 映射start场景成就ID到游戏成就ID
            var idMapping = {
              'affection_yaxin_max': 'affection_yaxin_max',
              'affection_xiaomeng_max': 'affection_xiaomeng_max',
              'affection_jingyi_max': 'affection_jingyi_max'
            };

            // 遍历映射，同步解锁状态
            for (var startId in idMapping) {
              var gameId = idMapping[startId];
              var startAchievement = null;
              for (var i = 0; i < startSceneAchievements.length; i++) {
                if (startSceneAchievements[i].id === startId) {
                  startAchievement = startSceneAchievements[i];
                  break;
                }
              }
              if (startAchievement && startAchievement.isUnlocked) {
                // 如果start场景中已解锁，同步到游戏系统
                var success = gameAchievementData.unlockAchievement(gameId);
                if (success) {
                  console.log("\uD83D\uDCE5 [StartSceneIntegration] \u4ECEstart\u573A\u666F\u52A0\u8F7D\u6210\u5C31\u89E3\u9501: " + startAchievement.name);
                }
              }
            }
          } catch (error) {
            console.error('❌ [StartSceneIntegration] 从start场景加载成就数据失败:', error);
          }
        }

        /**
         * 根据女主角好感度更新start场景的成就进度
         * @param heroine 女主角
         * @param affectionValue 好感度值
         */;
        _proto.updateAffectionProgress = function updateAffectionProgress(heroine, affectionValue) {
          try {
            var startSceneAchievements = AchievementConfig.getAchievementData();

            // 根据女主角确定成就ID
            var achievementId;
            switch (heroine) {
              case Heroine.LIN_YAXIN:
                achievementId = 'affection_yaxin_max';
                break;
              case Heroine.WANG_XIAOMENG:
                achievementId = 'affection_xiaomeng_max';
                break;
              case Heroine.CHEN_JINGYI:
                achievementId = 'affection_jingyi_max';
                break;
              default:
                return;
            }

            // 更新进度
            var achievement = null;
            for (var i = 0; i < startSceneAchievements.length; i++) {
              if (startSceneAchievements[i].id === achievementId) {
                achievement = startSceneAchievements[i];
                break;
              }
            }
            if (achievement) {
              achievement.unlockCondition.current = affectionValue;

              // 如果达到解锁条件且尚未解锁
              if (affectionValue >= achievement.unlockCondition.value && !achievement.isUnlocked) {
                achievement.isUnlocked = true;
                achievement.unlockTime = Date.now();
              }

              // 保存更新
              AchievementConfig.saveToStorage(startSceneAchievements);
            }
          } catch (error) {
            console.error('❌ [StartSceneIntegration] 更新好感度进度失败:', error);
          }
        }

        /**
         * 获取成就统计信息（包含start场景的数据）
         */;
        _proto.getAchievementStats = function getAchievementStats() {
          try {
            var unlocked = AchievementConfig.getUnlockedCount();
            var total = AchievementConfig.getTotalCount();
            var percentage = total > 0 ? Math.round(unlocked / total * 100) : 0;
            return {
              unlocked: unlocked,
              total: total,
              percentage: percentage
            };
          } catch (error) {
            console.error('❌ [StartSceneIntegration] 获取成就统计失败:', error);
            return {
              unlocked: 0,
              total: 0,
              percentage: 0
            };
          }
        }

        /**
         * 检查特定成就是否在start场景中已解锁
         * @param achievementId 成就ID
         */;
        _proto.isAchievementUnlockedInStartScene = function isAchievementUnlockedInStartScene(achievementId) {
          return AchievementConfig.isAchievementUnlocked(achievementId);
        };
        return StartSceneIntegration;
      }(), _class2.instance = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/VolumeManager.ts", ['cc'], function (exports) {
  var cclegacy, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ee15aQjc6ZNGIviAyzPGJUz", "VolumeManager", undefined);

      /**
       * 🔊 音量管理器
       * 负责统一管理背景音乐、音效和视频的音量设置
       */
      var VolumeManager = exports('VolumeManager', /*#__PURE__*/function () {
        function VolumeManager() {}
        /**
         * 获取背景音乐音量
         */
        VolumeManager.getBgmVolume = function getBgmVolume() {
          var volume = sys.localStorage.getItem(this.BGM_VOLUME_KEY);
          return volume ? parseFloat(volume) : this.DEFAULT_VOLUME;
        }

        /**
         * 获取音效音量
         */;
        VolumeManager.getSfxVolume = function getSfxVolume() {
          var volume = sys.localStorage.getItem(this.SFX_VOLUME_KEY);
          return volume ? parseFloat(volume) : this.DEFAULT_VOLUME;
        }

        /**
         * 获取视频音量
         */;
        VolumeManager.getVideoVolume = function getVideoVolume() {
          var volume = sys.localStorage.getItem(this.VIDEO_VOLUME_KEY);
          return volume ? parseFloat(volume) : this.DEFAULT_VOLUME;
        }

        /**
         * 设置背景音乐音量
         */;
        VolumeManager.setBgmVolume = function setBgmVolume(volume) {
          volume = Math.max(0, Math.min(1, volume)); // 限制在 0-1 范围内
          sys.localStorage.setItem(this.BGM_VOLUME_KEY, volume.toString());
          console.log("\uD83C\uDFB5 \u80CC\u666F\u97F3\u4E50\u97F3\u91CF\u5DF2\u4FDD\u5B58: " + Math.round(volume * 100) + "%");
        }

        /**
         * 设置音效音量
         */;
        VolumeManager.setSfxVolume = function setSfxVolume(volume) {
          volume = Math.max(0, Math.min(1, volume)); // 限制在 0-1 范围内
          sys.localStorage.setItem(this.SFX_VOLUME_KEY, volume.toString());
          console.log("\uD83D\uDD0A \u97F3\u6548\u97F3\u91CF\u5DF2\u4FDD\u5B58: " + Math.round(volume * 100) + "%");
        }

        /**
         * 设置视频音量
         */;
        VolumeManager.setVideoVolume = function setVideoVolume(volume) {
          volume = Math.max(0, Math.min(1, volume)); // 限制在 0-1 范围内
          sys.localStorage.setItem(this.VIDEO_VOLUME_KEY, volume.toString());
          console.log("\uD83C\uDFAC \u89C6\u9891\u97F3\u91CF\u5DF2\u4FDD\u5B58: " + Math.round(volume * 100) + "%");
        }

        /**
         * 应用背景音乐音量到 AudioSource
         */;
        VolumeManager.applyBgmVolume = function applyBgmVolume(audioSource) {
          if (!audioSource) {
            console.warn('⚠️ VolumeManager: 背景音乐 AudioSource 为空');
            return;
          }
          var volume = this.getBgmVolume();
          audioSource.volume = volume;
          console.log("\uD83C\uDFB5 \u80CC\u666F\u97F3\u4E50\u97F3\u91CF\u5DF2\u5E94\u7528: " + Math.round(volume * 100) + "%");
        }

        /**
         * 应用音效音量到 AudioSource
         */;
        VolumeManager.applySfxVolume = function applySfxVolume(audioSource) {
          if (!audioSource) {
            console.warn('⚠️ VolumeManager: 音效 AudioSource 为空');
            return;
          }
          var volume = this.getSfxVolume();
          audioSource.volume = volume;
          console.log("\uD83D\uDD0A \u97F3\u6548\u97F3\u91CF\u5DF2\u5E94\u7528: " + Math.round(volume * 100) + "%");
        }

        /**
         * 应用视频音量到 VideoPlayer
         */;
        VolumeManager.applyVideoVolume = function applyVideoVolume(videoPlayer) {
          if (!videoPlayer) {
            console.warn('⚠️ VolumeManager: VideoPlayer 为空');
            return;
          }
          var volume = this.getVideoVolume();
          videoPlayer.volume = volume;
          console.log("\uD83C\uDFAC \u89C6\u9891\u97F3\u91CF\u5DF2\u5E94\u7528: " + Math.round(volume * 100) + "%");
        }

        /**
         * 应用所有音量设置到对应的组件
         */;
        VolumeManager.applyAllVolumes = function applyAllVolumes(bgmSource, sfxSource, videoPlayer) {
          console.log('🔊 开始应用所有音量设置...');
          if (bgmSource) {
            this.applyBgmVolume(bgmSource);
          } else {
            console.warn('⚠️ VolumeManager: 背景音乐 AudioSource 未提供');
          }
          if (sfxSource) {
            this.applySfxVolume(sfxSource);
          } else {
            console.warn('⚠️ VolumeManager: 音效 AudioSource 未提供');
          }
          if (videoPlayer) {
            this.applyVideoVolume(videoPlayer);
          } else {
            console.log('ℹ️ VolumeManager: VideoPlayer 未提供，跳过视频音量设置');
          }
          console.log('✅ 音量设置应用完成');
        }

        /**
         * 重置所有音量到默认值
         */;
        VolumeManager.resetToDefault = function resetToDefault() {
          this.setBgmVolume(this.DEFAULT_VOLUME);
          this.setSfxVolume(this.DEFAULT_VOLUME);
          this.setVideoVolume(this.DEFAULT_VOLUME);
          console.log("\uD83D\uDD04 \u97F3\u91CF\u8BBE\u7F6E\u5DF2\u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u503C: " + Math.round(this.DEFAULT_VOLUME * 100) + "%");
        }

        /**
         * 获取所有音量设置的摘要信息
         */;
        VolumeManager.getVolumesSummary = function getVolumesSummary() {
          return {
            bgm: this.getBgmVolume(),
            sfx: this.getSfxVolume(),
            video: this.getVideoVolume()
          };
        }

        /**
         * 打印当前音量设置
         */;
        VolumeManager.logCurrentVolumes = function logCurrentVolumes() {
          var bgmVolume = this.getBgmVolume();
          var sfxVolume = this.getSfxVolume();
          var videoVolume = this.getVideoVolume();
          console.log("\uD83D\uDD0A \u5F53\u524D\u97F3\u91CF\u8BBE\u7F6E - BGM: " + Math.round(bgmVolume * 100) + "%, SFX: " + Math.round(sfxVolume * 100) + "%, VIDEO: " + Math.round(videoVolume * 100) + "%");
        };
        return VolumeManager;
      }());
      // 音量设置的存储键名
      VolumeManager.BGM_VOLUME_KEY = 'bgm_volume';
      VolumeManager.SFX_VOLUME_KEY = 'sfx_volume';
      VolumeManager.VIDEO_VOLUME_KEY = 'video_volume';
      // 默认音量值
      VolumeManager.DEFAULT_VOLUME = 0.7;
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