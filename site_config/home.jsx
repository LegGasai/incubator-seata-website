import React from 'react';

export default {
    'zh-cn': {
        brand: {
            brandName: 'Seata',
            briefIntroduction: 'Seata 是一款开源的分布式事务解决方案，致力于在微服务架构下提供高性能和简单易用的分布式事务服务。',
            buttons: [
                {
                    text: '快速入门',
                    link: '/zh-cn/docs/overview/what-is-seata.html',
                    type: 'primary',
                },
                {
                    text: '用户登记',
                    link: 'https://github.com/seata/seata/issues/1246',
                    type: 'normal',
                },
                {
                    text: 'Github-Java',
                    link: 'https://github.com/seata/seata',
                    type: 'normal',
                },
                {
                    text: 'Github-Golang',
                    link: 'https://github.com/opentrx/seata-golang',
                    type: 'normal',
                },
            ],
            versionNote: {
                text: 'Release Note of 1.4.2',
                link: 'https://github.com/seata/seata/releases/tag/v1.4.2',
            },
            releaseDate: 'Released on Apr 26, 2021',
        },
        introduction: {
            title: 'Seata 是什么？',
            desc: 'Seata 是一款开源的分布式事务解决方案，致力于在微服务架构下提供高性能和简单易用的分布式事务服务。在 Seata 开源之前，Seata 对应的内部版本在阿里经济体内部一直扮演着分布式一致性中间件的角色，帮助经济体平稳的度过历年的双11，对各BU业务进行了有力的支撑。经过多年沉淀与积累，商业化产品先后在阿里云、金融云进行售卖。2019.1 为了打造更加完善的技术生态和普惠技术成果，Seata 正式宣布对外开源，未来 Seata 将以社区共建的形式帮助其技术更加可靠与完备。',
            img: 'https://img.alicdn.com/tfs/TB1rDpkJAvoK1RjSZPfXXXPKFXa-794-478.png',
        },
        features: {
            title: '特色功能',
            list: [
                {
                    icon: 'feature-1',
                    title: '微服务框架支持',
                    content: '目前已支持 Dubbo、Spring Cloud、Sofa-RPC、Motan 和 grpc 等RPC框架，其他框架持续集成中',
                },
                {
                    icon: 'feature-2',
                    title: 'AT 模式',
                    content: '提供无侵入自动补偿的事务模式，目前已支持 MySQL、 Oracle 、PostgreSQL和 TiDB的AT模式，H2 开发中',
                },
                {
                    icon: 'feature-3',
                    title: 'TCC 模式',
                    content: '支持 TCC 模式并可与 AT 混用，灵活度更高',
                },
                {
                    icon: 'feature-4',
                    title: 'SAGA 模式',
                    content: '为长事务提供有效的解决方案',
                },
                {
                    icon: 'feature-5',
                    title: 'XA 模式',
                    content: '支持已实现 XA 接口的数据库的 XA 模式',
                },
                {
                    icon: 'feature-6',
                    title: '高可用',
                    content: '支持基于数据库存储的集群模式，水平扩展能力强',
                },
            ],
        },
        users: {
            title: '谁在使用 Seata',
            desc: <span>请在 <a rel="noopener noreferrer" target="_blank"
                              href="https://github.com/seata/seata/issues/1246">Wanted: who&#39;s using Seata</a> 上提供信息来帮助 Seata 做的更好。</span>,
            list: [
                'https://docs.alibabagroup.com/assets2/images/en/global/logo_header.png',
                'https://img.alicdn.com/tfs/TB1wuuCoET1gK0jSZFhXXaAtVXa-496-202.jpg',
                'https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png',
                'https://www.travelskyir.com/img/logo.gif',
                'https://img.alicdn.com/tfs/TB1hvabw9f2gK0jSZFPXXXsopXa-174-100.png',
                'https://www.china-tower.com/static/web/images/tower-logo.png',
                'https://website.didiglobal.com/dist/media/logo-zh.a7abd90d.svg',
                'http://www.chinapost.com.cn/res/chinapostplan/structure/181041269.png',
                'http://img.58cdn.com.cn/logo/58/252_84/logo-o.png?v=2',
                'https://img.alicdn.com/tfs/TB1GMQpZHY1gK0jSZTEXXXDQVXa-203-63.png',
                'https://img.alicdn.com/tfs/TB1oHThw.Y1gK0jSZFCXXcwqXXa-214-200.png',
                'http://www.yunda56.com/cn/images/ky_images/logo.png',
                'https://img.alicdn.com/tfs/TB1x0p5jxvbeK8jSZPfXXariXXa-272-83.png',
                'https://img.alicdn.com/imgextra/i2/O1CN01M9aSuY1nQWGxoVQu9_!!6000000005084-2-tps-239-78.png',
                'https://img.alicdn.com/imgextra/i1/O1CN01PmTFnO1gZ2K7GUpgh_!!6000000004155-2-tps-2406-747.png',
                'https://img.alicdn.com/tfs/TB1.zqEoAL0gK0jSZFAXXcA9pXa-245-38.png',
                'https://img.alicdn.com/tfs/TB1cgvjwYj1gK0jSZFOXXc7GpXa-1040-282.png',
                'https://img.alicdn.com/imgextra/i3/O1CN01OioqXX1dfxSxg6DYn_!!6000000003764-2-tps-574-122.png',
                'https://img.alicdn.com/tfs/TB1DDiCorY1gK0jSZTEXXXDQVXa-440-114.jpg',
                'https://img.alicdn.com/tfs/TB1SXGzoxn1gK0jSZKPXXXvUXXa-426-180.jpg',
                'https://www.xtep.com/public/images/logo.png',
                'https://img.alicdn.com/tfs/TB1rCNSFxn1gK0jSZKPXXXvUXXa-172-31.png',
                'https://img.alicdn.com/tfs/TB1Xa3bZQL0gK0jSZFtXXXQCXXa-936-93.png',
                'https://img.alicdn.com/tfs/TB1e7Wiovb2gK0jSZK9XXaEgFXa-1028-160.jpg',
                'https://img.alicdn.com/tfs/TB12cmCouL2gK0jSZFmXXc7iXXa-310-110.jpg',
                'https://img.alicdn.com/tfs/TB1j0dEop67gK0jSZPfXXahhFXa-400-208.jpg',
                'https://dgmall-1258058953.cos.ap-chengdu.myqcloud.com/img/logo_t.png',
                'http://www.truthai.cn/static/logo800.png',
                'https://img.alicdn.com/tfs/TB1tuSyouT2gK0jSZFvXXXnFXXa-304-94.jpg',
                'http://www.kangmei.com.cn/statics/images/kangmei/logo.png',
                'https://img.alicdn.com/tfs/TB1c8iCouL2gK0jSZFmXXc7iXXa-428-102.jpg',
                'https://img.xue2shou.com/g-xue2shou/website/0.8.2/static/logo.png',
                'https://img.alicdn.com/tfs/TB1OCGioCf2gK0jSZFPXXXsopXa-500-179.jpg',
                'https://img.alicdn.com/tfs/TB1Atu9ovzO3e4jSZFxXXaP_FXa-310-60.png',
                'https://img.alicdn.com/tfs/TB1pfYTpRBh1e4jSZFhXXcC9VXa-151-72.png',
                'http://yuetu365.com/uploads/allimg/20191016/d456dbbee0c54274a70d588af4ce6116.png',
                'https://img.alicdn.com/tfs/TB1UTwmZFT7gK0jSZFpXXaTkpXa-201-85.png',
                'https://img.alicdn.com/tfs/TB143R4op67gK0jSZPfXXahhFXa-148-42.png',
                'https://img.alicdn.com/tfs/TB1iMSAopP7gK0jSZFjXXc5aXXa-398-182.jpg',
                'https://www.yooli.com/v2/local/img/common/logo.png?version=20191126190304',
                'http://www.savor.com.cn/common/img/logo.png',
                'https://www.95303.com/img/header/logo_header.png',
                'https://img.alicdn.com/tfs/TB1JvOjouT2gK0jSZFvXXXnFXXa-386-146.jpg',
                'https://img.alicdn.com/tfs/TB1ChKFoBr0gK0jSZFnXXbRRXXa-402-166.jpg',
                'https://img.alicdn.com/tfs/TB1bNWFoBr0gK0jSZFnXXbRRXXa-398-336.jpg',
                'https://img.alicdn.com/tfs/TB1_D9Boxn1gK0jSZKPXXXvUXXa-580-218.jpg',
                'http://image.xiangzhuzhihui.com/images/logo/logo_02.png',
                'https://img.alicdn.com/tfs/TB1_miroq61gK0jSZFlXXXDKFXa-283-70.png',
                'https://img.alicdn.com/tfs/TB1HD.oZUY1gK0jSZFMXXaWcVXa-300-300.png',
                'https://img.alicdn.com/tfs/TB1CaSroAT2gK0jSZPcXXcKkpXa-492-176.jpg',
                'https://shinhoglobal.com/img/logo-shinho.svg',
                'https://img.alicdn.com/tfs/TB1JNSqouH2gK0jSZFEXXcqMpXa-450-182.jpg',
                'http://file.caixin.com/file/content/images/new/logo_bottom.png',
                'https://img.alicdn.com/tfs/TB1NV1uouH2gK0jSZJnXXaT1FXa-462-172.jpg',
                'http://www.cangowin.com/images/logo.png',
                'https://img.alicdn.com/tfs/TB1CCavoBr0gK0jSZFnXXbRRXXa-240-100.png',
                'https://img.alicdn.com/tfs/TB1IIivoxD1gK0jSZFyXXciOVXa-200-130.png',
                'https://img.alicdn.com/tfs/TB1kQThrFY7gK0jSZKzXXaikpXa-220-110.jpg',
                'https://img.alicdn.com/tfs/TB15r7dZHY1gK0jSZTEXXXDQVXa-234-233.png',
                'https://img.alicdn.com/tfs/TB1LK6jrUT1gK0jSZFrXXcNCXXa-180-54.png',
                'https://img.alicdn.com/tfs/TB1SEzM0eL2gK0jSZFmXXc7iXXa-154-45.png',
                'http://www.gisquest.com/static/web/img/img-1.png?v=v3',
                'https://img.alicdn.com/tfs/TB1VGpTFET1gK0jSZFrXXcNCXXa-193-55.png',
                'https://img.alicdn.com/tfs/TB19Y8XFEY1gK0jSZFMXXaWcVXa-160-60.png',
                'https://img.alicdn.com/tfs/TB1V1YlrRv0gK0jSZKbXXbK2FXa-514-160.png',
                'https://img.alicdn.com/tfs/TB1oC2prND1gK0jSZFyXXciOVXa-246-124.jpg',
                'https://img.alicdn.com/tfs/TB1defkrLb2gK0jSZK9XXaEgFXa-434-146.jpg',
                'https://img.alicdn.com/tfs/TB1uIHmrHr1gK0jSZR0XXbP8XXa-1024-568.png',
                'https://img.alicdn.com/tfs/TB1ERHlrUY1gK0jSZFMXXaWcVXa-120-60.png',
                'https://img.alicdn.com/tfs/TB1LT2lrNn1gK0jSZKPXXXvUXXa-300-300.jpg',
                'https://img.alicdn.com/tfs/TB1s2LprUY1gK0jSZFCXXcwqXXa-618-148.jpg',
                'https://img.alicdn.com/tfs/TB1qtGew7T2gK0jSZPcXXcKkpXa-294-104.png',
                'https://www.lafenfen.cn/img/icon03.png',
                'https://img.alicdn.com/tfs/TB1KVJ9wWL7gK0jSZFBXXXZZpXa-145-59.png',
                'https://img.alicdn.com/tfs/TB1vWafw7T2gK0jSZFkXXcIQFXa-301-100.png',
                'http://www.vivebest.com/templates/crs/images/vnb_logo.png',
                'https://img.alicdn.com/tfs/TB1hC5cwVY7gK0jSZKzXXaikpXa-318-134.png',
                'https://img.alicdn.com/tfs/TB1VuPhw4D1gK0jSZFyXXciOVXa-294-124.png',
                'https://img.alicdn.com/tfs/TB1FFX6FqL7gK0jSZFBXXXZZpXa-288-101.png',
                'https://img.alicdn.com/tfs/TB1gkXaFrr1gK0jSZR0XXbP8XXa-187-57.png',
                'https://img.alicdn.com/imgextra/i3/O1CN01svojxj1LuvK3hgQ5Y_!!6000000001360-2-tps-133-48.png',
                'https://img.alicdn.com/tfs/TB1oJKiw4D1gK0jSZFyXXciOVXa-2053-377.png',
                'https://img.alicdn.com/tfs/TB1eKFXFEz1gK0jSZLeXXb9kVXa-163-54.png',
                'https://img.alicdn.com/tfs/TB1Qcd0p79l0K4jSZFKXXXFjpXa-372-125.png',
                'https://img.alicdn.com/tfs/TB1UKocmPMZ7e4jSZFOXXX7epXa-234-82.png',
                'https://img.alicdn.com/tfs/TB1eswAZFP7gK0jSZFjXXc5aXXa-800-800.png',
                'https://img.alicdn.com/tfs/TB1IXqgwYj1gK0jSZFuXXcrHpXa-197-58.png',
                'https://img.alicdn.com/tfs/TB1KmosZNv1gK0jSZFFXXb0sXXa-247-61.png',
                'https://img.alicdn.com/imgextra/i3/O1CN018aBoRi1ZOm8uiOJwA_!!6000000003185-0-tps-1659-569.jpg',
                'https://img.alicdn.com/tfs/TB1bH5fw7L0gK0jSZFAXXcA9pXa-442-39.png',
                'https://img.alicdn.com/tfs/TB1xAJUFy_1gK0jSZFqXXcpaXXa-320-80.jpg',
                'https://image.cjia.com/website/apartment/webresource/image/logo_8f2f47fe.png',
                'https://img.alicdn.com/tfs/TB1ICJfFuH2gK0jSZJnXXaT1FXa-654-232.png',
                'https://img.alicdn.com/tfs/TB1rxndw4n1gK0jSZKPXXXvUXXa-150-68.png',
                'https://www.tsfyun.com/images/logo.png',
                'https://img.alicdn.com/tfs/TB1m0FcFuH2gK0jSZFEXXcqMpXa-139-48.png',
                'http://www.qijian-tech.com/img/logo.33134af4.png',
                'https://img.alicdn.com/tfs/TB14LhHmMgP7K4jSZFqXXamhVXa-300-135.png',
                'https://img.alicdn.com/tfs/TB1uUtaFuT2gK0jSZFvXXXnFXXa-370-45.jpg',
                'https://img.alicdn.com/imgextra/i3/O1CN018AiGbE1PZdN8Vu4Fd_!!6000000001855-2-tps-630-220.png',
                'https://img.alicdn.com/tfs/TB1iqo_FaL7gK0jSZFBXXXZZpXa-361-54.jpg',
                'http://www.javamall.com.cn/images/logonew.jpg',
                'https://zwxnetwork.oss-cn-shenzhen.aliyuncs.com/static/temporary_official_website/logo.png',
                'https://cdn.f5-store.cn/front_end/common_images/logo.png',
                'https://img.alicdn.com/imgextra/i3/O1CN01TKiMMC1VQpSIe3n7i_!!6000000002648-2-tps-931-865.png',
                'https://img.alicdn.com/tfs/TB1SxJWFEY1gK0jSZFCXXcwqXXa-185-65.png',
                'http://www.xyb2b.com/_nuxt/img/5e5584f.png',
                'https://zhengxin-pub.bj.bcebos.com/logopic/a4ff4990e2ba2d57c90e8d16c649b952_fullsize.jpg?x-bce-process=image/resize,m_lfit,w_200',
                'https://img.alicdn.com/tfs/TB1rhNRFAL0gK0jSZFtXXXQCXXa-321-96.png',
                'https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=829617221,290823158&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b0b603710dd0af061a278d11cfe327ae',
                'https://img.alicdn.com/tfs/TB1zuAzZKL2gK0jSZFmXXc7iXXa-691-263.png',
                'https://img.alicdn.com/tfs/TB18TNRFEz1gK0jSZLeXXb9kVXa-244-60.jpg',
                'https://img.alicdn.com/tfs/TB1i1JTFCf2gK0jSZFPXXXsopXa-151-60.png',
                'https://img.alicdn.com/tfs/TB1ztXXFpY7gK0jSZKzXXaikpXa-179-60.png',
                'https://img.alicdn.com/tfs/TB1SkJ9FuT2gK0jSZFvXXXnFXXa-266-56.png',
                'https://img.alicdn.com/tfs/TB1AzbWgZKfxu4jSZPfXXb3dXXa-1117-382.png',
                'https://img.alicdn.com/tfs/TB1HtFZFq61gK0jSZFlXXXDKFXa-1375-214.png',
                'https://img.alicdn.com/tfs/TB1nax.FuH2gK0jSZFEXXcqMpXa-336-154.png',
                'https://img.alicdn.com/tfs/TB1nS7IZNv1gK0jSZFFXXb0sXXa-716-193.png',
                'https://img.alicdn.com/tfs/TB13aaKpA9l0K4jSZFKXXXFjpXa-300-300.png',
                'https://img.alicdn.com/tfs/TB1To3amPMZ7e4jSZFOXXX7epXa-1228-500.png',
                'https://img.alicdn.com/tfs/TB1CZuKpA9l0K4jSZFKXXXFjpXa-283-92.png',
                'https://img.alicdn.com/tfs/TB1E4slZFT7gK0jSZFpXXaTkpXa-268-268.png',
                'https://img.alicdn.com/tfs/TB1.sIyZKL2gK0jSZFmXXc7iXXa-121-121.png',
                'https://img.alicdn.com/tfs/TB1aUUcZHY1gK0jSZTEXXXDQVXa-246-72.png',
                'https://img.alicdn.com/tfs/TB1v3.gZLb2gK0jSZK9XXaEgFXa-240-240.png',
                'https://img.alicdn.com/tfs/TB1VHkrZHr1gK0jSZFDXXb9yVXa-248-80.png',
                'https://img.alicdn.com/tfs/TB1kGElZUH1gK0jSZSyXXXtlpXa-126-48.png',
                'https://img.alicdn.com/tfs/TB1kIIqZUY1gK0jSZFMXXaWcVXa-90-80.png',
                'https://img.alicdn.com/tfs/TB1CawkZND1gK0jSZFsXXbldVXa-112-112.png',
                'https://img.alicdn.com/tfs/TB1fxZqZQL0gK0jSZFAXXcA9pXa-300-300.png',
                'https://img.alicdn.com/tfs/TB1q3UiZKL2gK0jSZPhXXahvXXa-802-271.png',
                'https://img.alicdn.com/tfs/TB1uf7bZQL0gK0jSZFtXXXQCXXa-303-65.png',
                'https://img.alicdn.com/tfs/TB1WMgmZUY1gK0jSZFCXXcwqXXa-189-57.png',
                'https://img.alicdn.com/tfs/TB1gnllpnM11u4jSZPxXXahcXXa-150-60.png',
                'https://img.alicdn.com/tfs/TB1NJmLpA9l0K4jSZFKXXXFjpXa-195-60.png',
                'https://img.alicdn.com/tfs/TB1jfCLpA9l0K4jSZFKXXXFjpXa-514-220.png',
                'https://img.alicdn.com/tfs/TB1vxJ.ZVT7gK0jSZFpXXaTkpXa-309-51.png',
                'https://img.alicdn.com/tfs/TB1v5eiZ.T1gK0jSZFrXXcNCXXa-500-41.png',
                'https://img.alicdn.com/imgextra/i2/O1CN01QPEPnx1zaOC9n4QXE_!!6000000006730-0-tps-781-100.jpg',
            ],
        },
    },
    'en-us': {
        brand: {
            brandName: 'Seata',
            briefIntroduction: 'Seata is an open source distributed transaction solution that delivers high performance and easy to use distributed transaction services under a microservices architecture.',
            buttons: [
                {
                    text: 'Get Started',
                    link: '/en-us/docs/user/quickstart.html',
                    type: 'primary',
                },
                {
                    text: 'User Registration',
                    link: 'https://github.com/seata/seata/issues/1246',
                    type: 'normal',
                },
                {
                    text: 'Github-Java',
                    link: 'https://github.com/seata/seata',
                    type: 'normal',
                },
                {
                    text: 'Github-Golang',
                    link: 'https://github.com/opentrx/seata-golang',
                    type: 'normal',
                },
            ],
            versionNote: {
                text: 'Release Note of 1.4.2',
                link: 'https://github.com/seata/seata/releases/tag/v1.4.2',
            },
            releaseDate: 'Released on Apr 26, 2021',
        },
        introduction: {
            title: 'What is Seata?',
            desc: 'Seata is an open source distributed transaction solution that delivers high performance and easy to use distributed transaction services under a microservices architecture. Before the open-source of Seata, the internal version of Seata played a role of distributed consistency Middleware in Ali economy, helping the economy to survive the double 11 of the past years smoothly, and providing strong support for businesses of all departments. After years of precipitation and accumulation, commercial products have been sold in Alibaba cloud and financial cloud. 2019.1 in order to create a more complete technological ecology and inclusive technological achievements, Seata officially announced open source to the outside world. In the future, Seata will help its technology become more reliable and complete in the form of community building.',
            img: 'https://img.alicdn.com/tfs/TB1rDpkJAvoK1RjSZPfXXXPKFXa-794-478.png',
        },
        features: {
            title: 'Feature List',
            list: [
                {
                    icon: 'feature-1',
                    title: 'Microservices Framework Support',
                    content: 'RPC frameworks such as Dubbo, Spring Cloud, Sofa-RPC, Motan, and grpc are currently supported, and other frameworks are continuously integrated.',
                },
                {
                    icon: 'feature-2',
                    title: 'AT mode',
                    content: 'Provides non-intrusive automatic compensation transaction mode, currently supports MySQL, Oracle, PostgreSQL and TiDB\'s AT mode, In developing the H2.',
                },
                {
                    icon: 'feature-3',
                    title: 'TCC mode',
                    content: 'Support TCC mode and mix with AT for greater flexibility.',
                },
                {
                    icon: 'feature-4',
                    title: 'SAGA mode',
                    content: 'Provide an effective solution for long transactions.',
                },
                {
                    icon: 'feature-5',
                    title: 'XA mode',
                    content: 'Support for XA schemas for databases that have implemented XA interfaces.',
                },
                {
                    icon: 'feature-6',
                    title: 'High availability',
                    content: 'Support cluster mode based on database storage, strong horizontal scalability.',
                },
            ]
        },
        users: {
            title: 'Who is using Seata',
            desc: <span>请在 <a rel="noopener noreferrer" target="_blank"
                              href="https://github.com/seata/seata/issues/1246">Wanted: who&#39;s using Seata</a> to help improving seata better.</span>,
            list: [
                'https://docs.alibabagroup.com/assets2/images/en/global/logo_header.png',
                'https://img.alicdn.com/tfs/TB1wuuCoET1gK0jSZFhXXaAtVXa-496-202.jpg',
            ],
        },
    },
};
