pipeline {
    agent any

    tools {
        nodejs 'yarn'
    }

    stages {
        stage('Checkout') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Unit tests') {
            steps {
                sh 'yarn test'
            }
        }
        stage('Integration tests') {
            steps {
                sh 'yarn build'
                sh 'yarn test:e2e'
            }
        }
    }
    post {
        always {
            junit '**/reports/**/*.xml'
        }
    }
}
