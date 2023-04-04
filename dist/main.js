/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(2);
const auth_1 = __webpack_require__(6);
const database_module_1 = __webpack_require__(22);
const files_module_1 = __webpack_require__(25);
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
            database_module_1.DatabaseModule,
            files_module_1.FilesModule,
            auth_1.AuthModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(7), exports);
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(20), exports);
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(19), exports);


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(2);
const jwt_1 = __webpack_require__(8);
const passport_1 = __webpack_require__(9);
const auth_config_service_1 = __webpack_require__(10);
const auth_service_1 = __webpack_require__(13);
const basic_strategy_1 = __webpack_require__(15);
const jwt_strategy_1 = __webpack_require__(17);
let AuthModule = AuthModule_1 = class AuthModule {
    static forRoot() {
        return {
            module: AuthModule_1,
            imports: [config_1.ConfigModule],
            providers: [auth_config_service_1.AuthConfigService],
            exports: [auth_config_service_1.AuthConfigService],
            global: true,
        };
    }
};
AuthModule = AuthModule_1 = __decorate([
    common_1.Module({
        imports: [
            AuthModule_1.forRoot(),
            jwt_1.JwtModule.registerAsync({
                useClass: auth_config_service_1.AuthConfigService,
                useExisting: auth_config_service_1.AuthConfigService,
            }),
            passport_1.PassportModule.registerAsync({
                useClass: auth_config_service_1.AuthConfigService,
                useExisting: auth_config_service_1.AuthConfigService,
            }),
        ],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, basic_strategy_1.BasicStrategy],
        exports: [auth_service_1.AuthService, jwt_1.JwtModule],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthConfigService = void 0;
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(2);
const fs_1 = __webpack_require__(11);
const path_1 = __webpack_require__(12);
let AuthConfigService = class AuthConfigService {
    constructor(configService) {
        this.alg = 'RS256';
        this.privateKey = this.getKeyOrSecret(configService);
        this.publicKey = this.getKeyOrSecret(configService, 'public');
        this.issuer = configService.get('AUTH_ISSUER', 'oauth');
        this.expiry = configService.get('AUTH_ACCESS_TOKEN_EXPIRY', '6h');
    }
    createAuthOptions() {
        return {
            session: false,
            defaultStrategy: ['jwt', 'basic'],
        };
    }
    createJwtOptions() {
        return {
            privateKey: this.privateKey,
            publicKey: this.publicKey,
            signOptions: {
                issuer: this.issuer,
                expiresIn: this.expiry,
                algorithm: this.alg,
            },
            verifyOptions: {
                issuer: this.issuer,
                algorithms: ['HS256', 'RS256'],
            },
        };
    }
    getKeyOrSecret(configService, keytype = 'private') {
        const type = keytype.toLocaleUpperCase();
        let key = configService.get(`AUTH_${type}_KEY`);
        if (key) {
            return key;
        }
        const keyPath = configService.get(`AUTH_${type}_KEY_PATH`);
        if (keyPath && fs_1.existsSync(keyPath)) {
            key = fs_1.readFileSync(path_1.resolve(keyPath));
        }
        else {
            key = configService.get('AUTH_SECRET', 'secret');
            this.alg = 'HS256';
        }
        return key;
    }
};
AuthConfigService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], AuthConfigService);
exports.AuthConfigService = AuthConfigService;


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(1);
const shared_utils_1 = __webpack_require__(14);
const jwt_1 = __webpack_require__(8);
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    sign(payload, options) {
        return this.jwtService.signAsync(payload, options);
    }
    verify(token, options) {
        return this.jwtService.verifyAsync(token, options);
    }
    decode(token) {
        return this.jwtService.decode(token);
    }
    verifyAdmin(user, password) {
        const adminUsers = [{ user: 'admin', password: 'admin' }];
        const existedUser = shared_utils_1.isEmpty(adminUsers)
            ? adminUsers
            : adminUsers.find((x) => x.user === user);
        return existedUser && existedUser.password === password;
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("@nestjs/common/utils/shared.utils");

/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BasicStrategy = void 0;
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(9);
const passport_http_1 = __webpack_require__(16);
const auth_service_1 = __webpack_require__(13);
let BasicStrategy = class BasicStrategy extends passport_1.PassportStrategy(passport_http_1.BasicStrategy, 'basic') {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    validate(username, password) {
        const isAdmin = this.authService.verifyAdmin(username, password);
        if (!isAdmin) {
            throw new common_1.UnauthorizedException();
        }
        return { user_name: username, role: 'admin' };
    }
};
BasicStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], BasicStrategy);
exports.BasicStrategy = BasicStrategy;


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("passport-http");

/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(9);
const passport_jwt_1 = __webpack_require__(18);
const auth_config_service_1 = __webpack_require__(10);
const user_payload_1 = __webpack_require__(19);
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy, 'jwt') {
    constructor(authConfigService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
                passport_jwt_1.ExtractJwt.fromUrlQueryParameter('token'),
                passport_jwt_1.ExtractJwt.fromHeader('authorization'),
            ]),
            secretOrKey: authConfigService.publicKey,
            passReqToCallback: false,
        });
    }
    validate(user) {
        if (!user) {
            throw new common_1.UnauthorizedException('User not authorized', 'unauthorized');
        }
        return new user_payload_1.UserPayload(user);
    }
};
JwtStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_config_service_1.AuthConfigService !== "undefined" && auth_config_service_1.AuthConfigService) === "function" ? _a : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserPayload = void 0;
class UserPayload {
    constructor(partial) {
        if (partial) {
            Object.assign(this, partial);
        }
    }
}
exports.UserPayload = UserPayload;


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGuard = void 0;
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(9);
function ApiGuard() {
    return common_1.applyDecorators(common_1.UseGuards(passport_1.AuthGuard(['basic', 'jwt'])));
}
exports.ApiGuard = ApiGuard;


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUser = void 0;
const common_1 = __webpack_require__(1);
exports.CurrentUser = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return data ? user === null || user === void 0 ? void 0 : user[data] : user;
});


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const express_cassandra_1 = __webpack_require__(23);
const common_1 = __webpack_require__(1);
const cassandra_option_factory_service_1 = __webpack_require__(24);
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [
            express_cassandra_1.ExpressCassandraModule.forRootAsync({
                useClass: cassandra_option_factory_service_1.CassandraOptionFactoryService,
            }),
        ],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),
/* 23 */
/***/ ((module) => {

module.exports = require("@iaminfinity/express-cassandra");

/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CassandraOptionFactoryService = void 0;
const express_cassandra_1 = __webpack_require__(23);
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(2);
let CassandraOptionFactoryService = class CassandraOptionFactoryService {
    constructor(configService) {
        this.contactPoints = configService.get('CASSANDRA_HOST')
            ? configService.get('CASSANDRA_HOST').split(',')
            : ['localhost'];
        this.keyspace = configService.get('CASSANDRA_KEYSPACE', 'upg');
        this.user = configService.get('CASSANDRA_USER', 'cassandra');
        this.password = configService.get('CASSANDRA_PASSWORD', 'cassandra');
        this.authProvider = new express_cassandra_1.auth.PlainTextAuthProvider(this.user, this.password);
    }
    createExpressCassandraOptions() {
        return {
            clientOptions: {
                contactPoints: this.contactPoints,
                keyspace: this.keyspace,
                authProvider: this.authProvider,
            },
            ormOptions: { createKeyspace: true, migration: 'alter' },
        };
    }
};
CassandraOptionFactoryService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], CassandraOptionFactoryService);
exports.CassandraOptionFactoryService = CassandraOptionFactoryService;


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilesModule = void 0;
const express_cassandra_1 = __webpack_require__(23);
const common_1 = __webpack_require__(1);
const file_upload_entity_1 = __webpack_require__(26);
const files_controller_1 = __webpack_require__(27);
const files_service_1 = __webpack_require__(39);
const serve_file_controller_1 = __webpack_require__(41);
let FilesModule = class FilesModule {
};
FilesModule = __decorate([
    common_1.Module({
        imports: [express_cassandra_1.ExpressCassandraModule.forFeature([file_upload_entity_1.FileUploadEntity]), common_1.HttpModule],
        controllers: [files_controller_1.FilesController, serve_file_controller_1.ServeFileController],
        providers: [files_service_1.FilesService],
    })
], FilesModule);
exports.FilesModule = FilesModule;


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileUploadEntity = void 0;
const express_cassandra_1 = __webpack_require__(23);
let FileUploadEntity = class FileUploadEntity {
};
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], FileUploadEntity.prototype, "file_id", void 0);
__decorate([
    express_cassandra_1.Column({ type: 'uuid' }),
    __metadata("design:type", Object)
], FileUploadEntity.prototype, "resource_id", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], FileUploadEntity.prototype, "resource_type", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], FileUploadEntity.prototype, "filename", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], FileUploadEntity.prototype, "originalname", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], FileUploadEntity.prototype, "mimetype", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], FileUploadEntity.prototype, "encoding", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'double',
    }),
    __metadata("design:type", Number)
], FileUploadEntity.prototype, "size", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], FileUploadEntity.prototype, "url", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], FileUploadEntity.prototype, "created_by", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'timestamp',
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], FileUploadEntity.prototype, "created_at", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], FileUploadEntity.prototype, "updated_by", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'timestamp',
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], FileUploadEntity.prototype, "updated_at", void 0);
FileUploadEntity = __decorate([
    express_cassandra_1.Entity({
        table_name: 'file_resources',
        key: ['file_id'],
        materialized_views: {
            files_by_resource: {
                key: ['resource_id', 'file_id'],
                select: ['*'],
            },
        },
    })
], FileUploadEntity);
exports.FileUploadEntity = FileUploadEntity;


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilesController = void 0;
const express_cassandra_1 = __webpack_require__(23);
const common_1 = __webpack_require__(1);
const platform_express_1 = __webpack_require__(28);
const swagger_1 = __webpack_require__(4);
const auth_1 = __webpack_require__(6);
const common_2 = __webpack_require__(29);
const multer = __webpack_require__(37);
const path = __webpack_require__(12);
const file_response_dto_1 = __webpack_require__(38);
const files_service_1 = __webpack_require__(39);
let FilesController = class FilesController {
    constructor(filesService) {
        this.filesService = filesService;
    }
    uploadFile(files, host) {
        const baseUrl = `https://${host}/upg-files/api/v1/file-serve`;
        return this.filesService.saveFile(files, baseUrl);
    }
    getByResourceId(resourceId) {
        return this.filesService.getFilesByResourceId(resourceId);
    }
    removeResourceById(fileId) {
        return this.filesService.removeResourceById(fileId);
    }
};
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({
        type: () => common_2.SwaggerResponseType(file_response_dto_1.FileResponseDTO, true),
    }),
    common_1.Post('upload'),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('files', 20, {
        dest: 'uploads',
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
                return cb(null, 'uploads');
            },
            filename: (req, file, cb) => {
                cb(null, express_cassandra_1.uuid() + path.extname(file.originalname));
            },
        }),
    })),
    __param(0, common_1.UploadedFiles()),
    __param(1, common_1.Headers('host')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Object)
], FilesController.prototype, "uploadFile", null);
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({
        type: () => common_2.SwaggerResponseType(file_response_dto_1.FileResponseDTO, true),
    }),
    common_1.Get('/resources/:resourceId'),
    __param(0, common_1.Param('resourceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_cassandra_1.types !== "undefined" && express_cassandra_1.types.Uuid) === "function" ? _a : Object]),
    __metadata("design:returntype", Object)
], FilesController.prototype, "getByResourceId", null);
__decorate([
    swagger_1.ApiOkResponse({ type: () => common_2.SwaggerResponseType(Boolean, false) }),
    common_1.Delete('/resources/:resourceId/:fileId/remove'),
    __param(0, common_1.Param('fileId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], FilesController.prototype, "removeResourceById", null);
FilesController = __decorate([
    auth_1.ApiGuard(),
    swagger_1.ApiTags('File Upload APIs'),
    common_1.Controller('files'),
    common_1.UseInterceptors(common_2.TransformInterceptor, common_2.UPGRequestLogInterceptor),
    __metadata("design:paramtypes", [typeof (_b = typeof files_service_1.FilesService !== "undefined" && files_service_1.FilesService) === "function" ? _b : Object])
], FilesController);
exports.FilesController = FilesController;


/***/ }),
/* 28 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(34), exports);
__exportStar(__webpack_require__(35), exports);


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(3);
let HttpExceptionFilter = class HttpExceptionFilter extends core_1.BaseExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const shouldResponseWrapped = this.shouldResponseWrapped(request);
        if (!(exception instanceof common_1.HttpException)) {
            exception = new common_1.InternalServerErrorException(exception);
        }
        const status = exception.getStatus();
        const exceptionDetails = exception.getResponse();
        response
            .status(shouldResponseWrapped ? 200 : status)
            .send(this.mapError(exceptionDetails, shouldResponseWrapped));
    }
    shouldResponseWrapped(request) {
        const requestResponseType = request.headers['x-response'] ||
            request.query.response;
        return requestResponseType &&
            requestResponseType.toLocaleLowerCase() === 'wrapped'
            ? true
            : false;
    }
    mapError(message, shouldResponseWrapped = false) {
        message = this.buildErrorMessage(message);
        return shouldResponseWrapped
            ? Object.assign(message, { result: null, status: 'failed' })
            : message;
    }
    buildErrorMessage(message) {
        const errorMessage = {};
        if (message.hasOwnProperty('error')) {
            errorMessage.error_name = message.error;
        }
        if (message.hasOwnProperty('message')) {
            errorMessage.message = message.message;
        }
        if (message.hasOwnProperty('statusCode')) {
            errorMessage.code = message.statusCode;
        }
        return errorMessage;
    }
};
HttpExceptionFilter = __decorate([
    common_1.Catch()
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;


/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransformInterceptor = void 0;
const common_1 = __webpack_require__(1);
const operators_1 = __webpack_require__(32);
let TransformInterceptor = class TransformInterceptor {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const shouldResponseWrapped = this.shouldResponseWrapped(request);
        return next
            .handle()
            .pipe(operators_1.map((x) => this.mapResponse(x, shouldResponseWrapped)));
    }
    mapResponse(data, shouldResponseWrapped = false) {
        const response = {
            status: 'ok',
        };
        Array.isArray(data)
            ? Object.assign(response, { resultset: data })
            : Object.assign(response, { result: data });
        return shouldResponseWrapped
            ? Object.assign(response, { error_name: null, message: null, code: 200 })
            : response;
    }
    shouldResponseWrapped(request) {
        const requestResponseType = request.headers['x-response'] || request.query.response;
        return requestResponseType &&
            requestResponseType.toLocaleLowerCase() === 'wrapped'
            ? true
            : false;
    }
};
TransformInterceptor = __decorate([
    common_1.Injectable()
], TransformInterceptor);
exports.TransformInterceptor = TransformInterceptor;


/***/ }),
/* 32 */
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UPGRequestLogInterceptor = void 0;
const common_1 = __webpack_require__(1);
let UPGRequestLogInterceptor = class UPGRequestLogInterceptor {
    constructor() {
        this.logger = new common_1.Logger('LogInterceptor');
        this.httpMethodWithBody = ['POST', 'UPDATE', 'PATCH'];
    }
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        let message = `[HTTP Request]: ${request.method} ${request.url}`;
        if (this.checkForBody(request)) {
            message =
                message + `\n\t[Request Body] => ${JSON.stringify(request.body)}`;
        }
        this.logger.verbose(message);
        return next.handle();
    }
    checkForBody(request) {
        return this.httpMethodWithBody.some((x) => x === request.method);
    }
};
UPGRequestLogInterceptor = __decorate([
    common_1.Injectable()
], UPGRequestLogInterceptor);
exports.UPGRequestLogInterceptor = UPGRequestLogInterceptor;


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UPGValidationPipe = void 0;
const common_1 = __webpack_require__(1);
let UPGValidationPipe = class UPGValidationPipe extends common_1.ValidationPipe {
    constructor(options) {
        options = options || {};
        super(Object.assign(Object.assign({ transform: true, whitelist: false, transformOptions: {
                exposeDefaultValues: true,
            } }, options), { exceptionFactory: (errors) => this.buildError(errors) }));
    }
    buildError(errors) {
        const properties = errors.map((x) => x.property).toString();
        const message = `Required properties ${properties} missing or invalid`;
        return new common_1.BadRequestException(message);
    }
};
UPGValidationPipe = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Optional()),
    __metadata("design:paramtypes", [typeof (_a = typeof common_1.ValidationPipeOptions !== "undefined" && common_1.ValidationPipeOptions) === "function" ? _a : Object])
], UPGValidationPipe);
exports.UPGValidationPipe = UPGValidationPipe;


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSwaggerResponseOptions = exports.SwaggerResponseType = void 0;
const common_1 = __webpack_require__(1);
const random_string_generator_util_1 = __webpack_require__(36);
const shared_utils_1 = __webpack_require__(14);
const swagger_1 = __webpack_require__(4);
function Mixin(classLike, objectName = random_string_generator_util_1.randomStringGenerator()) {
    Object.defineProperty(classLike, 'name', { value: objectName });
    common_1.Injectable()(classLike);
    return classLike;
}
function createResponseType(clazz, isArray = false) {
    class A {
    }
    __decorate([
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], A.prototype, "status", void 0);
    if (isArray) {
        class ResultSet extends A {
        }
        __decorate([
            swagger_1.ApiProperty({ type: clazz, isArray: true }),
            __metadata("design:type", Object)
        ], ResultSet.prototype, "resultset", void 0);
        return Mixin(ResultSet, `ResponseSetOf${clazz.name}`);
    }
    class Result extends A {
    }
    __decorate([
        swagger_1.ApiProperty({ type: clazz }),
        __metadata("design:type", Object)
    ], Result.prototype, "result", void 0);
    return Mixin(Result, `ResponseOf${clazz.name}`);
}
const SwaggerResponseType = (clazz, isArray = false) => createResponseType(clazz, isArray);
exports.SwaggerResponseType = SwaggerResponseType;
const getSwaggerResponseOptions = (clazz, isArray = false) => {
    if (isArray) {
        return {
            schema: {
                type: 'object',
                properties: {
                    resultset: {
                        items: shared_utils_1.isString(clazz)
                            ? { type: clazz }
                            : { $ref: swagger_1.getSchemaPath(clazz) },
                    },
                    status: { enum: ['ok', 'failed'] },
                },
            },
        };
    }
    return {
        schema: {
            type: 'object',
            properties: {
                result: shared_utils_1.isString(clazz)
                    ? { type: clazz }
                    : { $ref: swagger_1.getSchemaPath(clazz) },
                status: { enum: ['ok', 'failed'] },
            },
        },
    };
};
exports.getSwaggerResponseOptions = getSwaggerResponseOptions;


/***/ }),
/* 36 */
/***/ ((module) => {

module.exports = require("@nestjs/common/utils/random-string-generator.util");

/***/ }),
/* 37 */
/***/ ((module) => {

module.exports = require("multer");

/***/ }),
/* 38 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileResponseDTO = void 0;
const swagger_1 = __webpack_require__(4);
class FileResponseDTO {
}
__decorate([
    swagger_1.ApiResponseProperty(),
    __metadata("design:type", String)
], FileResponseDTO.prototype, "file_id", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    __metadata("design:type", String)
], FileResponseDTO.prototype, "resource_id", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    __metadata("design:type", String)
], FileResponseDTO.prototype, "resource_type", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    __metadata("design:type", String)
], FileResponseDTO.prototype, "filename", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    __metadata("design:type", String)
], FileResponseDTO.prototype, "originalname", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    __metadata("design:type", String)
], FileResponseDTO.prototype, "mimetype", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    __metadata("design:type", String)
], FileResponseDTO.prototype, "encoding", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    __metadata("design:type", String)
], FileResponseDTO.prototype, "size", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    __metadata("design:type", String)
], FileResponseDTO.prototype, "url", void 0);
exports.FileResponseDTO = FileResponseDTO;


/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilesService = void 0;
const express_cassandra_1 = __webpack_require__(23);
const common_1 = __webpack_require__(1);
const fs_1 = __webpack_require__(11);
const path = __webpack_require__(12);
const rxjs_1 = __webpack_require__(40);
const file_upload_entity_1 = __webpack_require__(26);
let FilesService = class FilesService {
    constructor(fileUploadRepository) {
        this.fileUploadRepository = fileUploadRepository;
    }
    async saveFile(files, baseUrl) {
        const fileList = [];
        files.forEach(async (file) => {
            const fileResource = new file_upload_entity_1.FileUploadEntity();
            fileResource.file_id = path.basename(file.filename, path.extname(file.filename));
            fileResource.filename = file.filename;
            fileResource.encoding = file.encoding;
            fileResource.mimetype = file.mimetype;
            fileResource.originalname = file.originalname;
            fileResource.size = file.size;
            fileResource.resource_id = express_cassandra_1.uuid();
            fileResource.resource_type = path
                .extname(file.filename)
                .replace(/\./g, '');
            fileResource.created_at = Date.now();
            fileResource.url = `${baseUrl}/${file.filename}`;
            await this.fileUploadRepository.save(fileResource);
            fileList.push(fileResource);
        });
        return fileList;
    }
    getFilesByResourceId(resourceId) {
        resourceId = express_cassandra_1.isUuid(resourceId) ? resourceId : express_cassandra_1.uuid(resourceId);
        return this.fileUploadRepository.find({ resource_id: resourceId }, { materialized_view: 'files_by_resource' });
    }
    removeResourceById(fileId) {
        return this.fileUploadRepository.findOne({ file_id: fileId }).pipe(rxjs_1.mergeMap(async (fileResource) => {
            if (!fileResource) {
                return true;
            }
            if (fs_1.existsSync(`uploads/${fileResource.file_id}`)) {
                fs_1.unlinkSync(`uploads/${fileResource.file_id}`);
            }
            await this.fileUploadRepository.remove(fileResource).toPromise();
            return true;
        }));
    }
};
FilesService = __decorate([
    common_1.Injectable(),
    __param(0, express_cassandra_1.InjectRepository(file_upload_entity_1.FileUploadEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof express_cassandra_1.Repository !== "undefined" && express_cassandra_1.Repository) === "function" ? _a : Object])
], FilesService);
exports.FilesService = FilesService;


/***/ }),
/* 40 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServeFileController = void 0;
const common_1 = __webpack_require__(1);
const express_1 = __webpack_require__(42);
const fs_1 = __webpack_require__(11);
const common_2 = __webpack_require__(29);
const path_1 = __webpack_require__(12);
let ServeFileController = class ServeFileController {
    async getFile(fileName, response) {
        try {
            const stat = await fs_1.promises.lstat(`uploads/${fileName}`);
            if (!stat.isFile()) {
                throw new common_1.NotFoundException('Resource not found');
            }
            response.sendFile(path_1.resolve(`uploads/${fileName}`));
        }
        catch (err) {
            throw new common_1.NotFoundException('Resource not found');
        }
    }
};
__decorate([
    common_1.Get(':fileName'),
    __param(0, common_1.Param('fileName')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], ServeFileController.prototype, "getFile", null);
ServeFileController = __decorate([
    common_1.UseInterceptors(common_2.TransformInterceptor, common_2.UPGRequestLogInterceptor),
    common_1.Controller('file-serve')
], ServeFileController);
exports.ServeFileController = ServeFileController;


/***/ }),
/* 42 */
/***/ ((module) => {

module.exports = require("express");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(2);
const core_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(4);
const app_module_1 = __webpack_require__(5);
async function bootstrap() {
    const logger = new common_1.Logger();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix('/api/v1');
    const config = app.get(config_1.ConfigService);
    const swaggerOptions = new swagger_1.DocumentBuilder()
        .setTitle('File Uploader API')
        .setDescription('File Uploader  API')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerOptions);
    swagger_1.SwaggerModule.setup('docs', app, document);
    const port = config.get('PORT', 3002);
    await app.listen(port);
    logger.log(`Application is running on : ${await app.getUrl()}`);
}
bootstrap();

})();

/******/ })()
;