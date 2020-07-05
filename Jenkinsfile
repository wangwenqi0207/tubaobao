pipeline {
    // 构建节点，参考原 Jenkins Job，General ➤ Restrict where this project can be run。如未限制就是 any。
    // agent { label 'mac_pro' }
    agent any
    options {
        disableConcurrentBuilds()
        timeout(time: 30, unit: 'MINUTES')
        timestamps()
    }
    // tools { nodejs 'Node 9.11.2 & npm 6.11.2' }
    tools { nodejs 'NodeJs_14_lts' }
    environment {
        // GIT_PROJECT_NAME = 'insurance-list-pages'
        project_name = 'rabbit'
        build_dir = 'dist'
        source_dir = '/root/docker_home/jenkins_home/workspace'
        target_dir = '/www/wwwroot'
    }
    stages {
        stage('Preparation') {
            steps {
                // NOTE: node 版本在 tools 部分制定。registry/npm 镜像，sass binary 都已经全局设置好无需特殊处理。
                sh 'node -v'
                sh 'npm -v'
                sh 'npm i'
            }
        }
        stage('Build') {
            steps {
                script {
                    echo "current branch: $BRANCH_NAME"
                    sh 'npm run build'
                    // try {
                    //   if (BRANCH_NAME.equals("master")) {
                    //     sh 'npm run build:prod'
                    //   } else {
                    //     sh 'npm run build'
                    //   }
                    // } catch(err){
                    //   throw err
                    // }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo "current branch: $BRANCH_NAME"
                    echo "BUILD_NUMBER: $BUILD_NUMBER"
                    echo "project_name: ${project_name}"
                    if (BRANCH_NAME.equals("develop") || BRANCH_NAME.equals("master")) {
                        sshPublisher(
                            continueOnError: false, failOnError: true,
                            publishers: [
                                sshPublisherDesc(
                                    configName: "ssh_server",
                                    verbose: true,
                                    transfers: [
                                        sshTransfer(
                                            sourceFiles: "${source_dir}/${project_name}_$BRANCH_NAME/${build_dir}/**/*", // dist 为构建结果文件夹
                                            removePrefix: "${build_dir}", // 部署后 URL path 不需要 ‘dist’ 路径因此去掉
                                            remoteDirectory: "${source_dir}/${project_name}_$BRANCH_NAME/${build_dir}",
                                            // 原始方法
                                            // execCommand: "cp -r /root/docker_home/jenkins_home/workspace/${project_name}_$BRANCH_NAME/dist/* /www/wwwroot/${project_name}/$BRANCH_NAME",
                                            // 原始方法提取
                                            execCommand: "cd $source_dir/${project_name}_$BRANCH_NAME && sh command_sh.sh $source_dir/${project_name}_$BRANCH_NAME $build_dir $project_name $BRANCH_NAME $target_dir",
                                            // docker
                                            // execCommand: "cd $source_dir/${project_name}_$BRANCH_NAME && sh command_docker.sh $source_dir/${project_name}_$BRANCH_NAME $build_dir $project_name $BRANCH_NAME $target_dir",
                                        )
                                    ]
                                )
                            ]
                        )
                    }
                    // else if (BRANCH_NAME.equals("master")) {
                    //     sh "sh ci2svn.sh"
                    // }
                }
            }
        }
    }
    post {
        failure {
            emailext(
                subject: "Jenkins build is ${currentBuild.result}: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                mimeType: "text/html",
                body: """<p>Jenkins build is ${currentBuild.result}: ${env.JOB_NAME} #${env.BUILD_NUMBER}:</p>
                        <p>Check console output at <a href="${env.BUILD_URL}console">${env.JOB_NAME} #${env.BUILD_NUMBER}</a></p>""",
                recipientProviders: [[$class: 'CulpritsRecipientProvider'],
                                    [$class: 'DevelopersRecipientProvider'],
                                    [$class: 'RequesterRecipientProvider']]
            )
        }
    }
}
