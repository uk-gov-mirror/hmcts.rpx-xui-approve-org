export default {
    services: {
        ccdDataApi: 'https://ccd-data-store-api-demo.service.core-compute-demo.internal',
        ccdDefApi: 'https://ccd-definition-store-api-aat.service.core-compute-aat.internal',
        idamWeb: 'https://idam-web-public.aat.platform.hmcts.net',
        idamApi: 'https://idam-api.aat.platform.hmcts.net',
        idamLoginUrl: 'https://idam-web-public.demo.platform.hmcts.net',
        s2s: 'https://rpe-service-auth-provider-demo.service.core-compute-demo.internal',
        draftStoreApi: 'https://draft-store-service-demo.service.core-compute-demo.internal',
        dmStoreApi: 'https://dm-store-demo.service.core-compute-demo.internal',
        emAnnoApi: 'https://em-anno-demo.service.core-compute-demo.internal',
        emNpaApi: 'https://em-npa-demo.service.core-compute-demo.internal',
        rdProfessionalApi: 'https://rpa-rd-professional-aat.service.core-compute-aat.internal',
    },
    health: {
        ccdDataApi: 'https://ccd-data-store-api-demo.service.core-compute-demo.internal/health',
        ccdDefApi: 'https://ccd-definition-store-api-aat.service.core-compute-aat.internal/health',
        idamWeb: 'https://idam-web-public.aat.platform.hmcts.net/health',
        idamApi: 'https://idam-api.aat.platform.hmcts.net/health',
        s2s: 'https://rpe-service-auth-provider-demo.service.core-compute-demo.internal/health',
        draftStoreApi: 'https://draft-store-service-demo.service.core-compute-demo.internal/health',
        dmStoreApi: 'https://dm-store-demo.service.core-compute-demo.internal/health',
        emAnnoApi: 'https://em-anno-demo.service.core-compute-demo.internal/health',
        emNpaApi: 'https://em-npa-demo.service.core-compute-demo.internal/health',
        rdProfessionalApi: 'https://rpa-rd-professional-aat.service.core-compute-aat.internal/health',
    },
    useProxy: false,
    secureCookie: false,
    sessionSecret: 'secretSauce',
    logging: 'debug',
}
